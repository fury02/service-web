import { Actor, HttpAgent } from '@dfinity/agent';

import { idlFactory  as idl} from "../../dfxgen/dbs/idl/dbs.did";
import { _SERVICE  as service_dbs}  from "../../dfxgen/dbs/interface/dbs.did";

const canister_id_service_dbs = "rrkah-fqaaa-aaaaa-aaaaq-cai";

const host_local = "http://127.0.0.1:8000";
export class Actor_Service_Local {
    public actor_service_dbs : service_dbs;

    constructor(){
        const host = host_local;
        let options = {};
        const agentOptions = { ...options,  host: host };
        const agent = new HttpAgent(agentOptions);
        agent.fetchRootKey();

        this.actor_service_dbs = Actor.createActor<service_dbs>( idl, {
            agent,
            canisterId: canister_id_service_dbs
        });
    }
}
