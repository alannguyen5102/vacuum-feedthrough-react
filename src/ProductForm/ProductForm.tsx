import React from 'react';
import FormRow from '../FormRow/FormRow';
import WireGauge from '../WireGauge/WireGauge';

export default class ProductForm extends React.Component {
    render() {
        return (
            <div className="form-inline">
                <FormRow>
                    <WireGauge></WireGauge>
                </FormRow>
                
            </div>
            
        );
    }
}
