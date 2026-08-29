import { Action, wfa, actionStep } from '@servicenow/sdk/automation'

export const ranOnInstance = Action(
    {
        $id: Now.ID['ran_on_instance_action'],
        name: 'Ran On Instance',
        description: 'Runs a simple server-side script that logs "ran on instance" whenever the action is triggered.',
        category: 'incident_investigation',
        access: 'public',
        inputs: {},
        outputs: {},
    },
    () => {
        wfa.actionStep(
            actionStep.script,
            { $id: Now.ID['ran_on_instance_script_step'], label: 'Log ran on instance' },
            {
                required_run_time: 'instance',
                script: `
(function execute(inputs, outputs) {
    gs.info('ran on instance');
    gs.info('created by build agent');
    gs.info('created while sdlc demo');
    gs.info('created while sdlc demo from Claude and VScode');
})(inputs, outputs);
                `,
            }
        )
    }
)
