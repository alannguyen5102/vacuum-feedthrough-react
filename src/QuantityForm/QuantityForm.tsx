import React from 'react';
import InputGroup from '../InputGroup/InputGroup';
import LabelAddOn from '../LabelAddOn/LabelAddOn';
import './QuantityForm.scss';

export default class QuantityForm extends React.Component {
    render() {
        return (
            <InputGroup>
                <LabelAddOn htmlFor="quantity-box">Quantity*</LabelAddOn>
                <input className="form-control" type="number"></input>
            </InputGroup>
        );
    }
}
