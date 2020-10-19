import React from 'react';
import LabelAddOn from '../LabelAddOn/LabelAddOn';
import './QuantityForm.scss';

export default class QuantityForm extends React.Component {
    render() {
        return (
            <div className="input-group">
                <LabelAddOn htmlFor="quantity-box">Quantity*</LabelAddOn>
                <input className="form-control" type="number"></input>
            </div>
        );
    }
}
