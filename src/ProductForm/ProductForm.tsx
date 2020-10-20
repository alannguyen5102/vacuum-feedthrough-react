import React from 'react';
import DisclaimerText from '../DisclaimerText/DisclaimerText';
import FormRow from '../FormRow/FormRow';
import QuantityForm from '../QuantityForm/QuantityForm';
import SectionLabel from '../SectionLabel/SectionLabel';
import SubmitButton from '../SubmitButton/SubmitButton';
import WireGauge from '../WireGauge/WireGauge';

export default class ProductForm extends React.Component {
    render() {
        return (
            <div className="form-inline">
                <DisclaimerText>
                    * = Required Field
                </DisclaimerText>
                <DisclaimerText>
                    † All vacuum feedthroughs are leak tested 10 <sub>-7</sub> to 10 <sub>-9</sub>atm-cc/sec 
                </DisclaimerText>
                <DisclaimerText>
                    †† Dimensions are show in inches.
                </DisclaimerText>

                <FormRow>
                    <QuantityForm></QuantityForm>
                </FormRow>
                <FormRow>
                    <WireGauge></WireGauge>
                </FormRow>
                <FormRow>
                    <SectionLabel>Feedthrough</SectionLabel>
                </FormRow>
                
                <DisclaimerText>
                    ††† Visual is intended for reference and not to scale.
                </DisclaimerText>
                <DisclaimerText>
                    This application is intended to simplify the feedthrough request process for the average user.  
                </DisclaimerText>
                <DisclaimerText>
                    If you require something that is not currently available with the given selections, please feel free to give us the details in the application notes below so we can better assist you.
                </DisclaimerText>
                <FormRow>
                    <SubmitButton>Request a Quote</SubmitButton>
                </FormRow>
            </div>
            
        );
    }
}
