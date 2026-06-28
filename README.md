# SN AI Agents

> ⭐ **Star this repo for more ServiceNow related AI Agent builds!**

A collection of AI Agents built for ServiceNow using the [Fluent SDK](https://developer.servicenow.com/dev.do#!/guides/xanadu/now-platform/now-sdk/now-sdk-fluent-landing-page) (`@servicenow/sdk`).

---

## Agents

### 🔍 Incident Investigation Agent

An AI Agent that automatically triggers when an incident transitions to **In Progress** (`state = 2`). It investigates the issue by searching the web for known solutions and posts a structured **HTML investigation report** as a work note on the incident.

**How it works:**

1. Triggered automatically when an incident state changes to In Progress
2. Looks up the incident's `short_description` and `description`
3. Runs 2–3 targeted web searches via **Apify RAG Web Browser**
4. Analyzes results to identify root causes, solutions, and workarounds
5. Posts a formatted HTML report to the incident work notes

**Tools:**

| Tool | Type | Description |
|------|------|-------------|
| Lookup Incident | CRUD | Fetches incident details (description, category, assignment) |
| Apify Web Search | Flow Action | Calls Apify `rag-web-browser` actor via REST to search the web |
| Post Investigation Report | Script | Writes the HTML report to `work_notes` using `GlideRecordSecure` |

**Report includes:**
- Incident Summary
- Possible Root Causes
- Recommended Solutions (step-by-step)
- Workarounds
- References (URLs from search results)
- Next Steps for the assignee

---

## Project Structure

```
src/
  fluent/
    actions/
      apify-web-search.now.ts      # Flow Designer Action — calls Apify via REST
    agents/
      incident-investigation-agent.now.ts  # AI Agent definition
now.config.json                    # App scope and metadata
package.json
```

---

## Prerequisites

- **Node.js 20+**
- **ServiceNow instance** (PDI or enterprise) with AI Agent Studio enabled
- **Apify account** — get a free API token at [console.apify.com](https://console.apify.com/account/integrations)

---

## Setup & Deployment

### 1. Install dependencies

```bash
npm install
```

### 2. Create the Apify system property on your instance

Navigate to **System Properties** in ServiceNow and create:

| Property | Value |
|----------|-------|
| `apify.api.key` | Your Apify API token |

### 3. Authenticate the SDK

```bash
npx @servicenow/sdk auth --add https://your-instance.service-now.com --type basic
```

### 4. Build

```bash
npm run build
```

### 5. Deploy

```bash
npm run deploy
```

### 6. Activate the trigger

Go to **AI Agent Studio → Incident Investigation Agent → Triggers** and activate the `incident_transitions_to_in_progress` trigger.

---

## How the Apify Integration Works

The **Apify Web Search** Flow Designer Action calls the [`apify/rag-web-browser`](https://apify.com/apify/rag-web-browser) actor synchronously via `sn_ws.RESTMessageV2`:

```
POST https://api.apify.com/v2/acts/apify~rag-web-browser/run-sync-get-dataset-items
Authorization: Bearer <apify.api.key>
{
  "query": "<search query>",
  "maxResults": 3,
  "outputFormats": ["markdown"]
}
```

The actor queries Google Search, scrapes the top 3 pages, and returns their content as clean Markdown — ready for the AI Agent to analyze.

---

## Tech Stack

- [ServiceNow Fluent SDK](https://developer.servicenow.com) `@servicenow/sdk 4.6.0`
- [Apify RAG Web Browser](https://apify.com/apify/rag-web-browser) for web search
- ServiceNow AI Agent Studio (`sn_aia_agent`)
- Flow Designer Custom Actions (`sys_hub_action_type_definition`)

---

> ⭐ **If this was useful, star the repo and watch for more ServiceNow AI Agent builds!**
