import React, {useState} from "react";
import {Col, Container, Form, FormControl, InputGroup, Row, Table} from 'react-bootstrap';
import {Counter} from "../../../../redux/features/counter/Counter";


const CounterSampleComponent: React.FC = () => {

    return (
        <div className="App">
            <header className="App-header">
                <Counter />
            </header>
        </div>
    )
}

export default CounterSampleComponent;
