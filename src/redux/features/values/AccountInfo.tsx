import { useAppSelector, useAppDispatch } from '../../app/Hooks';
import {selectValues} from './AccountSlice';
import React from "react";
import {plug_connect, stoic_connect} from "../../../const/Website";

export function AccountInfo() {
    const values = useAppSelector(selectValues);

    const provider = values[0];
    const principal = values[1];
    const balance = values[2];
    const account_id = values[3];

    let view;

    if(provider === plug_connect){
        if(balance !== undefined){
            const balanceSymbol = 'ICP';
            const balance_icp  = 'Balance:' + ' ' +  balance + ' ' + balanceSymbol;
            view =
                <div>
                    <div>
                        <h6 className="App-text-x-small col-0 text-truncate">{principal}</h6>
                        <h6 className="App-text-micro col-0 text-truncate">{account_id}</h6>
                        <h6 className="App-text-micro-green col-0 text-truncate">{provider + ';' + ' ' + balance_icp}</h6>
                    </div>
                </div>
        }
        else { view = <div> </div> }
    }
    else if(provider === stoic_connect){
        if(balance !== undefined){
            const balanceSymbol = 'ICP';
            const balance_icp  = 'Balance:' + ' ' +  balance + ' ' + balanceSymbol;
            view =
                <div>
                    <div>
                        <h6 className="App-text-x-small col-0 text-truncate">{principal}</h6>
                        <h6 className="App-text-micro col-0 text-truncate">{account_id}</h6>
                        <h6 className="App-text-x-small-green col-0 text-truncate">{provider}</h6>
                    </div>
                </div>
        }
        else { view = <div> </div> }
    }
    else { view = <div> </div> }

    return ( view );
}
