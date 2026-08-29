import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    apify_rest_call_step: {
                        table: 'sys_hub_step_instance'
                        id: '78ceab009f3b4ab38ad36820f25701f8'
                    }
                    apify_web_search_action: {
                        table: 'sys_hub_action_type_definition'
                        id: 'acc02ead8b9c467c85da065903fa1d84'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: 'c4e59e6491c445b494c8ce9d683197a3'
                    }
                    incident_investigation_agent: {
                        table: 'sn_aia_agent'
                        id: '1b8e673ee69043b1922196a4c2faefca'
                    }
                    incident_investigation_agent_acl: {
                        table: 'sys_security_acl'
                        id: 'e0c8f2a184204b218a8b4d8e9cdbdeee'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'bfdbdb7e787f4985b5a5a8833d1943a6'
                    }
                    ran_on_instance_action: {
                        table: 'sys_hub_action_type_definition'
                        id: 'd55ca9c5d89a4c04a0b59ba8369e60ac'
                    }
                    ran_on_instance_script_step: {
                        table: 'sys_hub_step_instance'
                        id: '0e3997e600f445e9af7c22bfa9263c5f'
                    }
                }
                composite: [
                    {
                        table: 'sn_aia_tool'
                        id: '05cfb76fd86243b8968758be5ca9741d'
                        key: {
                            name: 'Apify Web Search'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '15f5611877144bfea368910771c7cd2b'
                        key: {
                            name: 'var__m_sys_hub_action_output_acc02ead8b9c467c85da065903fa1d84'
                            element: 'search_results'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '33052a54079c48f6ac48db56bd81a753'
                        key: {
                            model: 'd55ca9c5d89a4c04a0b59ba8369e60ac'
                            element: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sn_aia_agent_config'
                        id: '33066feb04f54203b7008474bb458bfe'
                        key: {
                            agent: '1b8e673ee69043b1922196a4c2faefca'
                        }
                    },
                    {
                        table: 'sn_aia_trigger_configuration'
                        id: '38cc139358a044cda39f0d9773a4caa4'
                        deleted: true
                        key: {
                            name: 'incident_transitions_to_in_progress'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3d5c4ee5c82748c39ca4f3629e56d66b'
                        key: {
                            document_key: '0e3997e600f445e9af7c22bfa9263c5f'
                            variable: '71aa7f6647032200b4fad7527c9a719b'
                        }
                    },
                    {
                        table: 'sn_aia_agent_tool_m2m'
                        id: '456f65a1eb4f4d0a82d5d03f16b0ed47'
                        key: {
                            agent: '1b8e673ee69043b1922196a4c2faefca'
                            tool: '05cfb76fd86243b8968758be5ca9741d'
                            name: 'Apify Web Search'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4a227b41225d401b887f0b6bdb5c0c17'
                        key: {
                            name: 'var__m_sys_hub_action_input_acc02ead8b9c467c85da065903fa1d84'
                            element: 'query'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4afc606cdaea4071b00d2a9a91d3be66'
                        key: {
                            sys_security_acl: 'e0c8f2a184204b218a8b4d8e9cdbdeee'
                            sys_user_role: '282bf1fac6112285017366cb5f867469'
                        }
                    },
                    {
                        table: 'sn_aia_version'
                        id: '4cdca22388574633a46dfc0aafe91ca2'
                        key: {
                            target_id: '1b8e673ee69043b1922196a4c2faefca'
                            version_name: 'V1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '61207e4b945d46f3a452369baf52e0c0'
                        key: {
                            name: 'var__m_sys_hub_action_output_d55ca9c5d89a4c04a0b59ba8369e60ac'
                            element: '__dont_treat_as_error__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7837dd14096a443f8934dbd304b0d554'
                        key: {
                            name: 'var__m_sys_hub_action_output_acc02ead8b9c467c85da065903fa1d84'
                            element: '__dont_treat_as_error__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '847a83fe74ff43569569527a2499211d'
                        key: {
                            document_key: '78ceab009f3b4ab38ad36820f25701f8'
                            variable: '71aa7f6647032200b4fad7527c9a719b'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: '8c54026dc2bd4d10a3f5f5c3ad240b9b'
                        key: {
                            model: 'acc02ead8b9c467c85da065903fa1d84'
                            element: 'query'
                        }
                    },
                    {
                        table: 'sn_aia_trigger_configuration'
                        id: '8fe607ad69d44ce4b29bff0ed7542e0d'
                        deleted: false
                        key: {
                            name: 'incident_transitions_to_in_progress'
                            usecase: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '952a5431d464444a946b89015449e7f1'
                        key: {
                            name: 'var__m_sys_hub_action_output_d55ca9c5d89a4c04a0b59ba8369e60ac'
                            element: '__action_status__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '959084914c9c4e3e91bb4aa442439155'
                        key: {
                            name: 'var__m_sys_hub_action_output_acc02ead8b9c467c85da065903fa1d84'
                            element: '__action_status__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sn_aia_trigger_agent_usecase_m2m'
                        id: '9c73cb9d16594b57897d62df5382e275'
                        deleted: true
                        key: {
                            trigger_configuration: {
                                id: '38cc139358a044cda39f0d9773a4caa4'
                                key: {
                                    name: 'incident_transitions_to_in_progress'
                                }
                            }
                            related_resource_record: '1b8e673ee69043b1922196a4c2faefca'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '9f5859df5e524a66ad96a889d2370ee7'
                        key: {
                            model: 'acc02ead8b9c467c85da065903fa1d84'
                            element: 'search_results'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'a1b630c7c7da4733b0bd78c6051ec945'
                        key: {
                            model: 'd55ca9c5d89a4c04a0b59ba8369e60ac'
                            element: '__action_status__'
                        }
                    },
                    {
                        table: 'sn_aia_tool'
                        id: 'a25ca1a5f90b45739ca5a9228554c20e'
                        key: {
                            name: 'Lookup Incident'
                        }
                    },
                    {
                        table: 'sn_aia_agent_tool_m2m'
                        id: 'a43814df6bf145a1832727a5e0b30c31'
                        deleted: true
                        key: {
                            agent: '1b8e673ee69043b1922196a4c2faefca'
                            tool: 'a25ca1a5f90b45739ca5a9228554c20e'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a4bf0e5bb8784c078dbfa2c9f94189fc'
                        key: {
                            document_key: '0e3997e600f445e9af7c22bfa9263c5f'
                            variable: '74315b04b3201300176b051a16a8dc2b'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'a4f03acc410640ea94e3e544753bf5d8'
                        key: {
                            model: 'acc02ead8b9c467c85da065903fa1d84'
                            element: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sn_aia_agent_tool_m2m'
                        id: 'ac7ba50536f64b3981a9b44993df5113'
                        deleted: true
                        key: {
                            agent: '1b8e673ee69043b1922196a4c2faefca'
                            tool: 'b5ee9d93ab014d40a3a667180e19973e'
                        }
                    },
                    {
                        table: 'sn_aia_tool'
                        id: 'b5ee9d93ab014d40a3a667180e19973e'
                        key: {
                            name: 'Post Investigation Report'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'be96b431993b4ad0aad3d2cd46726907'
                        key: {
                            sys_security_acl: 'e0c8f2a184204b218a8b4d8e9cdbdeee'
                            sys_user_role: '2831a114c611228501d4ea6c309d626d'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'd401282d8cde453192a1756cf3062f42'
                        key: {
                            model: 'acc02ead8b9c467c85da065903fa1d84'
                            element: '__action_status__'
                        }
                    },
                    {
                        table: 'sn_aia_trigger_agent_usecase_m2m'
                        id: 'd541c7373c1d4b64a15ca11175ed5e92'
                        deleted: false
                        key: {
                            trigger_configuration: {
                                id: '8fe607ad69d44ce4b29bff0ed7542e0d'
                                key: {
                                    name: 'incident_transitions_to_in_progress'
                                    usecase: 'NULL'
                                }
                            }
                            related_resource_record: '1b8e673ee69043b1922196a4c2faefca'
                        }
                    },
                    {
                        table: 'sn_aia_agent_tool_m2m'
                        id: 'e603a49f31dc4483b3298c48d7b0a487'
                        deleted: false
                        key: {
                            agent: '1b8e673ee69043b1922196a4c2faefca'
                            tool: 'a25ca1a5f90b45739ca5a9228554c20e'
                            name: 'Lookup Incident'
                        }
                    },
                    {
                        table: 'sn_aia_agent_tool_m2m'
                        id: 'ed5d9268e0ee484e9aaf249d33cfa049'
                        deleted: true
                        key: {
                            agent: '1b8e673ee69043b1922196a4c2faefca'
                            tool: '05cfb76fd86243b8968758be5ca9741d'
                        }
                    },
                    {
                        table: 'sn_aia_agent_tool_m2m'
                        id: 'edca7715b3c647a7aedd8462f89c00a0'
                        deleted: false
                        key: {
                            agent: '1b8e673ee69043b1922196a4c2faefca'
                            tool: 'b5ee9d93ab014d40a3a667180e19973e'
                            name: 'Post Investigation Report'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ffec66ef59414572b32375b6e72e2964'
                        key: {
                            document_key: '78ceab009f3b4ab38ad36820f25701f8'
                            variable: '74315b04b3201300176b051a16a8dc2b'
                        }
                    },
                ]
            }
        }
    }
}
