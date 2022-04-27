import { Actor, HttpAgent } from '@dfinity/agent';

import { idlFactory  as idl} from "../../dfxgen/dbs/idl/dbs.did";
import { _SERVICE  as service_dbs}  from "../../dfxgen/dbs/interface/dbs.did";

import { idlFactory  as idl_fs} from "../../dfxgen/dbst/idl/dbst.did";
import { _SERVICE  as service_dbst}  from "../../dfxgen/dbst/interface/dbst.did";

import { idlFactory  as idl_dbsf} from "../../dfxgen/dbsf/idl/dbsf.did";
import { _SERVICE  as service_dbsf}  from "../../dfxgen/dbsf/interface/dbsf.did";

const canister_id_service_dbs = "rrkah-fqaaa-aaaaa-aaaaq-cai";
const canister_id_service_dbsf = "ryjl3-tyaaa-aaaaa-aaaba-cai";
const canister_id_service_dbst = "r7inp-6aaaa-aaaaa-aaabq-cai";

const host_local = "http://127.0.0.1:8000";
export class Actor_Service_Local {
    public actor_service_dbs : service_dbs;
    public actor_service_dbst : service_dbst;
    public actor_service_dbsf : service_dbsf;

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

        this.actor_service_dbst  = Actor.createActor<service_dbst>( idl_fs, {
            agent,
            canisterId: canister_id_service_dbst
        });

        this.actor_service_dbsf  = Actor.createActor<service_dbsf>( idl_dbsf, {
            agent,
            canisterId: canister_id_service_dbsf
        });
    }
}
