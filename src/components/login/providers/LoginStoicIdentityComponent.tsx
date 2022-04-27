import React, {useEffect, useState} from "react";
import {Button, ButtonGroup} from 'react-bootstrap';
import {Identity, SignIdentity} from "@dfinity/agent";
// ic-stoic-identity is not typed
// @ts-ignore
import {StoicIdentity as StoicIdentityImport} from 'ic-stoic-identity';
import {set_values} from "../../../redux/features/values/AccountSlice";
import {useAppDispatch} from "../../../redux/app/Hooks";
import {getAccountId} from "../../../util/crypto/BundleAccount";
import {plug_connect, stoic_connect} from "../../../const/Website";
export const StoicIdentity: StoicIdentity & StoicIdentityStaticTypes = StoicIdentityImport;

type StoicIdentityStaticTypes = {
    disconnect(): Promise<void>;
};

export interface StoicIdentity extends SignIdentity {
    connect(): Promise<StoicIdentity>;
    load(host?: string): Promise<StoicIdentity | undefined>;
}

export async function createNewStoicIdentityConnection(): Promise<StoicIdentity> {
    const currentStoicAuth = await loadStoredStoicIdentity();
    if (currentStoicAuth) {
        return currentStoicAuth;
    } else {
        const newStoicAuth = await StoicIdentity.connect();
        // const principal = newStoicAuth.getPrincipal();
        // const public_key = newStoicAuth.getPublicKey();
        return newStoicAuth;
    }
}

export async function loadStoredStoicIdentity(): Promise<StoicIdentity | undefined> {
    const stoicIdentity = await StoicIdentity.load();
    if (stoicIdentity) {
        return stoicIdentity;
    } else {
        return undefined;
    }
}

export async function disconnectFromStoicIdentity(): Promise<void> {
    return StoicIdentity.disconnect();
}

const LoginStoicIdentityComponent: React.FC = () =>{
    const [stoic_identity, setNewStoicIdentity] = useState<StoicIdentity | null>(null);
    const [identity_value, setInputValue] = useState<string>("");
    const dispatch = useAppDispatch();

    useEffect(() => { }, []);

    const updateView = () => { }

    const clickSignInIC = () => {
        let balance = '';
        createNewStoicIdentityConnection().then(i => {
            setNewStoicIdentity(i);
            let pubKey = i.getPublicKey();
            let principal = i.getPrincipal();
            let account_id = getAccountId(principal);
            dispatch(set_values([stoic_connect, principal.toString(), balance, 'Account:' + ' ' + account_id]));
            // setInputValue(i.getPrincipal().toString());
            }
        );
    };

    const clickSignOutIC = () =>{
        disconnectFromStoicIdentity().then(i => { });
        dispatch(set_values(['', '', '']));
        // setInputValue("");
    }

    return (
        <div className="whiteText">
            {/*<div className="d-flex align-items-center justify-content-center">*/}
            {/*    <AccountInfo></AccountInfo>*/}
            {/*</div>*/}
            <div className="div_logins_button_centr">
                <ButtonGroup vertical>
                    <Button className="btn btn-info min-logins-button" size="lg"  onClick={clickSignInIC}>Connect</Button>
                    <h6></h6>
                    <Button className="btn btn-info min-logins-button" size="lg"  onClick={clickSignOutIC}>Disconnect</Button>
                    <h6></h6>
                </ButtonGroup>
            </div>
        </div>
    );
}

export default LoginStoicIdentityComponent;
