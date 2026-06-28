import { Action, wfa, actionStep } from '@servicenow/sdk/automation'
import { StringColumn } from '@servicenow/sdk/core'

export const apifyWebSearch = Action(
    {
        $id: Now.ID['apify_web_search_action'],
        name: 'Apify Web Search',
        description: 'Searches the web using the Apify RAG Web Browser actor via REST and returns page content as Markdown. Store your Apify API token in the system property: apify.api.key',
        category: 'incident_investigation',
        access: 'public',
        inputs: {
            query: StringColumn({ label: 'Search Query', mandatory: true }),
        },
        outputs: {
            search_results: StringColumn({ label: 'Search Results (JSON array)' }),
        },
    },
    (_params) => {
        wfa.actionStep(
            actionStep.script,
            { $id: Now.ID['apify_rest_call_step'], label: 'Call Apify REST API' },
            {
                required_run_time: 'instance',
                script: `
(function execute(inputs, outputs) {
    var query = inputs.query;
    var apiKey = gs.getProperty('apify.api.key', '');

    if (!apiKey) {
        gs.error('Apify Web Search: system property apify.api.key is not set.');
        outputs.search_results = JSON.stringify([{
            error: 'Apify API key not configured.',
            hint: 'Create system property apify.api.key with your Apify API token.'
        }]);
        return;
    }

    try {
        var rm = new sn_ws.RESTMessageV2();
        rm.setEndpoint('https://api.apify.com/v2/acts/apify~rag-web-browser/run-sync-get-dataset-items');
        rm.setHttpMethod('POST');
        rm.setRequestHeader('Content-Type', 'application/json');
        rm.setRequestHeader('Authorization', 'Bearer ' + apiKey);
        rm.setHttpTimeout(60000);

        var requestBody = JSON.stringify({
            query: query,
            maxResults: 3,
            outputFormats: ['markdown']
        });
        rm.setRequestBody(requestBody);

        var response = rm.execute();
        var statusCode = response.getStatusCode();
        var responseBody = response.getBody();

        if (statusCode >= 200 && statusCode < 300) {
            outputs.search_results = responseBody;
        } else {
            gs.error('Apify REST call failed. Status: ' + statusCode + ' Body: ' + responseBody);
            outputs.search_results = JSON.stringify([{
                error: 'Web search failed',
                status: statusCode,
                detail: responseBody
            }]);
        }
    } catch (e) {
        gs.error('Apify Web Search exception: ' + e.message);
        outputs.search_results = JSON.stringify([{ error: e.message }]);
    }
})(inputs, outputs);
                `
            }
        )
    }
)
