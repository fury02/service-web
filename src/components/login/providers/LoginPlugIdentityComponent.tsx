import React, {useEffect, useState} from "react";
import {ButtonGroup} from 'react-bootstrap';
import PlugConnectButtonComponent from "./PlugConnectButtonComponent";
import {plug_connect, plug_host_connect, plug_web_host, plug_whitelist_connect} from "../../../const/Website";
import { set_values } from "../../../redux/features/values/AccountSlice";
import {useAppDispatch} from "../../../redux/app/Hooks";
import { Principal } from "@dfinity/principal";
import {getAccountId} from "../../../util/crypto/BundleAccount";

const LoginPlugIdentityComponent = () =>{
    const dispatch = useAppDispatch();

    useEffect(() => { }, []);
    const updateView = () => { }

    const clickSignInIC = async (connected:any) => {

        let account_id = '';
        let derKeyUint8Array: any;
        Object.entries(connected).forEach(([key, value]) => {
            if(key == "derKey"){
                derKeyUint8Array = value
            }
        });

        Object.entries(derKeyUint8Array).forEach(([key, value]) => {
            if(key == "data"){
                // @ts-ignore
                var principal = Principal.selfAuthenticating(value);
                account_id = getAccountId(principal);
            }
        });

        let principal = String(await (window as any)?.ic?.plug?.agent.getPrincipal());
        let balance = await (window as any)?.ic?.plug?.requestBalance();
        dispatch(set_values([plug_connect, principal, balance[0].amount.toString(), 'Account:' + ' ' + account_id]));
        console.warn(principal);
    };

    const clickSignOutIC = async () =>{
        // dispatch(set_values(Map({ provider: '', principal: '', balance: '' })));
    }

    return (
        <div className="whiteText">
            <div className="div_logins_button_centr">
                <ButtonGroup vertical>
                    <ButtonGroup vertical>
                        <PlugConnectButtonComponent onConnectCallback={(connected) => clickSignInIC(connected)}></PlugConnectButtonComponent>
                    </ButtonGroup>
                </ButtonGroup>
            </div>
        </div>
    );
}

export default LoginPlugIdentityComponent;

