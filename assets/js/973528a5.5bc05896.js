"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4977],{97653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=n(85893),i=n(11151);const a={sidebar_label:"gpt_assistant_agent",title:"agentchat.contrib.gpt_assistant_agent"},r=void 0,o={id:"reference/agentchat/contrib/gpt_assistant_agent",title:"agentchat.contrib.gpt_assistant_agent",description:"GPTAssistantAgent",source:"@site/docs/reference/agentchat/contrib/gpt_assistant_agent.md",sourceDirName:"reference/agentchat/contrib",slug:"/reference/agentchat/contrib/gpt_assistant_agent",permalink:"/autogen/docs/reference/agentchat/contrib/gpt_assistant_agent",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/reference/agentchat/contrib/gpt_assistant_agent.md",tags:[],version:"current",frontMatter:{sidebar_label:"gpt_assistant_agent",title:"agentchat.contrib.gpt_assistant_agent"},sidebar:"referenceSideBar",previous:{title:"agent_optimizer",permalink:"/autogen/docs/reference/agentchat/contrib/agent_optimizer"},next:{title:"img_utils",permalink:"/autogen/docs/reference/agentchat/contrib/img_utils"}},c={},l=[{value:"GPTAssistantAgent",id:"gptassistantagent",level:2},{value:"__init__",id:"__init__",level:3},{value:"can_execute_function",id:"can_execute_function",level:3},{value:"reset",id:"reset",level:3},{value:"clear_history",id:"clear_history",level:3},{value:"pretty_print_thread",id:"pretty_print_thread",level:3},{value:"oai_threads",id:"oai_threads",level:3},{value:"assistant_id",id:"assistant_id",level:3},{value:"get_assistant_instructions",id:"get_assistant_instructions",level:3},{value:"delete_assistant",id:"delete_assistant",level:3},{value:"find_matching_assistant",id:"find_matching_assistant",level:3}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"gptassistantagent",children:"GPTAssistantAgent"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"class GPTAssistantAgent(ConversableAgent)\n"})}),"\n",(0,s.jsx)(t.p,{children:"An experimental AutoGen agent class that leverages the OpenAI Assistant API for conversational capabilities.\nThis agent is unique in its reliance on the OpenAI Assistant for state management, differing from other agents like ConversableAgent."}),"\n",(0,s.jsx)(t.h3,{id:"__init__",children:"__init__"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'def __init__(name="GPT Assistant",\n             instructions: Optional[str] = None,\n             llm_config: Optional[Union[Dict, bool]] = None,\n             assistant_config: Optional[Dict] = None,\n             overwrite_instructions: bool = False,\n             overwrite_tools: bool = False,\n             **kwargs)\n'})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"name"})," ",(0,s.jsx)(t.em,{children:"str"})," - name of the agent. It will be used to find the existing assistant by name. Please remember to delete an old assistant with the same name if you intend to create a new assistant with the same name."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"instructions"})," ",(0,s.jsx)(t.em,{children:"str"})," - instructions for the OpenAI assistant configuration.\nWhen instructions is not None, the system message of the agent will be\nset to the provided instructions and used in the assistant run, irrespective\nof the overwrite_instructions flag. But when instructions is None,\nand the assistant does not exist, the system message will be set to\nAssistantAgent.DEFAULT_SYSTEM_MESSAGE. If the assistant exists, the\nsystem message will be set to the existing assistant instructions."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"llm_config"})," ",(0,s.jsx)(t.em,{children:"dict or False"})," - llm inference configuration.\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"model: Model to use for the assistant (gpt-4-1106-preview, gpt-3.5-turbo-1106).\nassistant_config"}),"\n",(0,s.jsx)(t.li,{children:"assistant_id: ID of the assistant to use. If None, a new assistant will be created."}),"\n",(0,s.jsx)(t.li,{children:"check_every_ms: check thread run status interval"}),"\n",(0,s.jsxs)(t.li,{children:["tools: Give Assistants access to OpenAI-hosted tools like Code Interpreter and Knowledge Retrieval,\nor build your own tools using Function calling. ref ",(0,s.jsx)(t.a,{href:"https://platform.openai.com/docs/assistants/tools",children:"https://platform.openai.com/docs/assistants/tools"})]}),"\n",(0,s.jsxs)(t.li,{children:["file_ids: (Deprecated) files used by retrieval in run. It is Deprecated, use tool_resources instead. ",(0,s.jsx)(t.a,{href:"https://platform.openai.com/docs/assistants/migration/what-has-changed",children:"https://platform.openai.com/docs/assistants/migration/what-has-changed"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"tool_resources: A set of resources that are used by the assistant's tools. The resources are specific to the type of tool."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"overwrite_instructions"})," ",(0,s.jsx)(t.em,{children:"bool"})," - whether to overwrite the instructions of an existing assistant. This parameter is in effect only when assistant_id is specified in llm_config."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"overwrite_tools"})," ",(0,s.jsx)(t.em,{children:"bool"})," - whether to overwrite the tools of an existing assistant. This parameter is in effect only when assistant_id is specified in llm_config."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"kwargs"})," ",(0,s.jsx)(t.em,{children:"dict"})," - Additional configuration options for the agent.\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"verbose (bool): If set to True, enables more detailed output from the assistant thread."}),"\n",(0,s.jsx)(t.li,{children:"Other kwargs: Except verbose, others are passed directly to ConversableAgent."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"can_execute_function",children:"can_execute_function"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"def can_execute_function(name: str) -> bool\n"})}),"\n",(0,s.jsx)(t.p,{children:"Whether the agent can execute the function."}),"\n",(0,s.jsx)(t.h3,{id:"reset",children:"reset"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"def reset()\n"})}),"\n",(0,s.jsx)(t.p,{children:"Resets the agent, clearing any existing conversation thread and unread message indices."}),"\n",(0,s.jsx)(t.h3,{id:"clear_history",children:"clear_history"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"def clear_history(agent: Optional[Agent] = None)\n"})}),"\n",(0,s.jsx)(t.p,{children:"Clear the chat history of the agent."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"agent"})," - the agent with whom the chat history to clear. If None, clear the chat history with all agents."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"pretty_print_thread",children:"pretty_print_thread"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"def pretty_print_thread(thread)\n"})}),"\n",(0,s.jsx)(t.p,{children:"Pretty print the thread."}),"\n",(0,s.jsx)(t.h3,{id:"oai_threads",children:"oai_threads"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"@property\ndef oai_threads() -> Dict[Agent, Any]\n"})}),"\n",(0,s.jsx)(t.p,{children:"Return the threads of the agent."}),"\n",(0,s.jsx)(t.h3,{id:"assistant_id",children:"assistant_id"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"@property\ndef assistant_id()\n"})}),"\n",(0,s.jsx)(t.p,{children:"Return the assistant id"}),"\n",(0,s.jsx)(t.h3,{id:"get_assistant_instructions",children:"get_assistant_instructions"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"def get_assistant_instructions()\n"})}),"\n",(0,s.jsx)(t.p,{children:"Return the assistant instructions from OAI assistant API"}),"\n",(0,s.jsx)(t.h3,{id:"delete_assistant",children:"delete_assistant"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"def delete_assistant()\n"})}),"\n",(0,s.jsx)(t.p,{children:"Delete the assistant from OAI assistant API"}),"\n",(0,s.jsx)(t.h3,{id:"find_matching_assistant",children:"find_matching_assistant"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"def find_matching_assistant(candidate_assistants, instructions, tools)\n"})}),"\n",(0,s.jsx)(t.p,{children:"Find the matching assistant from a list of candidate assistants.\nFilter out candidates with the same name but different instructions, and function names."})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var s=n(67294);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);