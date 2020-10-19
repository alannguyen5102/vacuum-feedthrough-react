import React from 'react';
import FormRow from '../FormRow/FormRow';
import QuantityForm from '../QuantityForm/QuantityForm';
import WireGauge from '../WireGauge/WireGauge';

export default class ProductForm extends React.Component {
    render() {
        return (
            <div className="form-inline">
                <FormRow>
                    <QuantityForm></QuantityForm>
                </FormRow>
                <FormRow>
                    <WireGauge></WireGauge>
                </FormRow>
                
            </div>
            
        );
    }
}
