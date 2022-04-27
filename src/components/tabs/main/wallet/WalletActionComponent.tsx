import React, {Component, useEffect, useState} from "react";
import {Button, ButtonGroup, Col, Container, Form, FormControl, InputGroup, Row, Table} from 'react-bootstrap';
import {plug_host_connect, plug_web_host, plug_whitelist_connect, plug_timeout_connect} from "../../../../const/Website";
import {
    canister_nns_cycles_minting,
    canister_nns_ledger,
    canister_wicp,
    canister_xtc
} from "../../../../const/Canisters";
import {AddEntityesTableComponent} from "../../examples/fragments/tables_create_upload/AddEntityesTableComponent";
import {UploadFileComponent} from "../../examples/fragments/tables_create_upload/UploadFileComponent";
import {GetEntityesTableComponent} from "../../examples/fragments/tables_create_upload/GetEntityesTableComponent";
import {useAppDispatch} from "../../../../redux/app/Hooks";
import {AnyAction, Dispatch} from "@reduxjs/toolkit";
import HistoryOperations from "../../../../util/blockchain/account/history/HistoryOperations";
import {Principal} from "@dfinity/principal";
import {getAccountId} from "../../../../util/crypto/BundleAccount";
import {set_values} from "../../../../redux/features/values/AccountSlice";

const WalletActionComponent = () => {
    const [principal_value, setPrincipalValue] = useState<string>("");
    const [balance_value, setBalanceValue] = useState<string>("");
    const [account_id, setAccountValue] = useState<string>("");
    const [principalTo, setPrincipalTo] = useState<string>("");
    const [amountTo, setAmountTo] = useState<string>("");

    const digitMultiplier = 100000000;
    const dispatch = useAppDispatch();

    const updateView = () => { }

    useEffect(() => {
        async function plugAction() {
            const isConnected = await (await (window as any)?.ic.plug.isConnected());
            if (!isConnected) {
                let account_id = '';
                let derKeyUint8Array: any;

                const connected = (await (window as any)?.ic.plug.requestConnect({ plug_whitelist_connect, plug_web_host }));

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
                        // setAccountValue(principal.toString());
                    }
                });

                let principal = String(await (window as any)?.ic?.plug?.agent.getPrincipal());
                // setPrincipalValue(principal);
                let balance = await (window as any)?.ic?.plug?.requestBalance();
                // setBalanceValue(balance[0].amount.toString());

                dispatch(set_values(['Plug' + ' ' + 'connected', principal, balance[0].amount.toString(), 'Account:' + ' ' + account_id]));
            }
            if (isConnected && !(window as any)?.ic.plug.agent) {
                const agent = await (window as any)?.ic.plug.createAgent({ plug_whitelist_connect, plug_web_host });
                // dispatch(set_values(['Plug' + ' ' + 'connected', principal_value, balance_value, 'Account:' + ' ' + account_id]));
            }
        }
        plugAction();
    }, [])

    const handleInputChangePrincipalTo = (event: { target: { value: any; }; }) => {
        let value: String = event.target.value;
        let count = value.split('-').length - 1;
        if(count == 10){ setPrincipalTo(value.toString());  }
        else{
            alert('Invalid departure address. Use the Principal ID');
        }
    }

    const handleInputChangeAmountTo = (event: { target: { value: any; }; }) => {
        let value: String = event.target.value;
        setAmountTo(value.toString());
    }

    const handleClickSend = async () => {
        const to = principalTo;
        const amount_input = String(amountTo);
        if(to != null && amount_input != null){
            const amountNumber = Number(amount_input.replace(',', '.'));
            const amount = amountNumber * digitMultiplier;
            const requestTransferArg = { to, amount };
            const response = await (window as any)?.ic?.plug?.requestTransfer(requestTransferArg);
            console.warn("click send");
        }
    }

    const handleClickIsConnect = async () => {
        const response = await (window as any)?.ic?.plug?.isConnected();
        if(response){
            alert('Plug connected');
        }
        else{
            alert('Plug disconnect');
        }
        console.warn("click connect")
    }

    return(
        <div className="whiteText">
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="whiteText">
                                <Container>
                                    <div className="p-3">
                                        <h6 className="coralText">Address (Plug Account):</h6>
                                        <input className="p-2 rounded-3" name="Address" onChange={handleInputChangePrincipalTo}  placeholder="Address To"/>
                                        <h6 className="">Amount:</h6>
                                        <input className="p-2 rounded-3" name="Amount" onChange={handleInputChangeAmountTo}  placeholder="Amount To"/>
                                    </div>
                                    <div className="p-3 ">
                                        <Button onClick={handleClickSend}>Send</Button>
                                        <h1></h1>
                                        <Button onClick={handleClickIsConnect}>IsConnect</Button>
                                    </div>
                                </Container>
                            </div>
                        </div>
                        <div className="col-2">
                            {/*<h6>2</h6>*/}
                        </div>
                    </div>
                    {/*<div className="row">*/}
                    {/*    <div className="col">*/}
                    {/*        <h6>3</h6>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-2">*/}
                    {/*        <h6>4</h6>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
}

export default WalletActionComponent;

// class WalletActionComponent extends Component {
//     private digitMultiplier: number;
//     // private dispatch:  Dispatch<AnyAction>;
//
//     constructor(props: any){
//         super(props);
//         this.handleInputChangePrincipalTo = this.handleInputChangePrincipalTo .bind(this);
//         this.handleInputChangeAmountTo  = this.handleInputChangeAmountTo .bind(this);
//         this.handleClickSend = this.handleClickSend.bind(this);
//         this.digitMultiplier = 100000000;
//         // this.dispatch = useAppDispatch();
//     }
//
//     state = {
//         principalTo:null,
//         amountTo:null,
//     }
//
//     async verifyConnectionAndAgent()  {
//         const connected = await (await (window as any)?.ic.plug.isConnected());
//         if (!connected) (await (window as any)?.ic.plug.requestConnect({ plug_whitelist_connect, plug_web_host }));
//         if (connected && !(window as any)?.ic.plug.agent) {
//             (window as any)?.ic.plug.createAgent({ plug_whitelist_connect, plug_web_host })
//         }
//     };
//
//     async componentDidMount(){
//         //const dispatch:  Dispatch<AnyAction> = useAppDispatch();
//
//         const isConnected = await (await (window as any)?.ic.plug.isConnected());
//         if (!isConnected) {
//             let account_id = '';
//             let derKeyUint8Array: any;
//
//             const connected = (await (window as any)?.ic.plug.requestConnect({ plug_whitelist_connect, plug_web_host }));
//
//             Object.entries(connected).forEach(([key, value]) => {
//                 if(key == "derKey"){
//                     derKeyUint8Array = value
//                 }
//             });
//
//             Object.entries(derKeyUint8Array).forEach(([key, value]) => {
//                 if(key == "data"){
//                     // @ts-ignore
//                     var principal = Principal.selfAuthenticating(value);
//                     account_id = getAccountId(principal);
//                 }
//             });
//
//             let principal = String(await (window as any)?.ic?.plug?.agent.getPrincipal());
//             let balance = await (window as any)?.ic?.plug?.requestBalance();
//
//             // dispatch(set_values(['Plug' + ' ' + 'connected', principal, balance[0].amount.toString(), 'Account:' + ' ' + account_id]));
//         }
//         if (isConnected && !(window as any)?.ic.plug.agent) {
//             const agent = await (window as any)?.ic.plug.createAgent({ plug_whitelist_connect, plug_web_host });
//         }
//     }
//
//     handleInputChangePrincipalTo(event: { target: { value: any; }; }) {
//         let value: String = event.target.value;
//         let count = value.split('-').length - 1;
//         if(count == 10){
//             this.setState({
//                 principalTo: event.target.value,
//             });
//         }
//         else{
//             alert('Invalid departure address. Use the Principal ID');
//         }
//         console.warn(this.state);
//     }
//
//     handleInputChangeAmountTo(event: { target: { value: any; }; }) {
//         this.setState({
//             amountTo: event.target.value
//         });
//         console.warn(this.state)
//     }
//
//     async handleClickSend() {
//         const to = this.state.principalTo;
//         const amount_input = String(this.state.amountTo);
//         if(to != null && amount_input != null){
//             const amountNumber = Number(amount_input.replace(',', '.'));
//             const amount = amountNumber * this.digitMultiplier;
//             const requestTransferArg = { to, amount };
//             const response = await (window as any)?.ic?.plug?.requestTransfer(requestTransferArg);
//             console.warn("click send");
//         }
//     }
//
//     async handleClickIsConnect() {
//         const isConnected = await (window as any)?.ic?.plug?.isConnected();
//         if(isConnected){
//             alert('Plug connected');
//         }
//         else{
//             alert('Plug disconnect');
//         }
//         console.warn("click connect")
//     }
//
//     render(){
//         return(
//             <div className="whiteText">
//                 <div>
//                     <div className="container">
//                         <div className="row">
//                             <div className="col">
//                                 <div className="whiteText">
//                                     <Container>
//                                         <div className="p-3">
//                                             <h6 className="coralText">Address (Plug Account):</h6>
//                                             <input className="p-2 rounded-3" name="Address" onChange={this.handleInputChangePrincipalTo}  placeholder="Address To"/>
//                                             <h6 className="">Amount:</h6>
//                                             <input className="p-2 rounded-3" name="Amount" onChange={this.handleInputChangeAmountTo}  placeholder="Amount To"/>
//                                         </div>
//                                         <div className="p-3 ">
//                                             <Button onClick={this.handleClickSend}>Send</Button>
//                                             <h1></h1>
//                                             <Button onClick={this.handleClickIsConnect}>IsConnect</Button>
//                                         </div>
//                                     </Container>
//                                 </div>
//                             </div>
//                             <div className="col-2">
//                                 {/*<h6>2</h6>*/}
//                             </div>
//                         </div>
//                         {/*<div className="row">*/}
//                         {/*    <div className="col">*/}
//                         {/*        <h6>3</h6>*/}
//                         {/*    </div>*/}
//                         {/*    <div className="col-2">*/}
//                         {/*        <h6>4</h6>*/}
//                         {/*    </div>*/}
//                         {/*</div>*/}
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
//
// export default WalletActionComponent;