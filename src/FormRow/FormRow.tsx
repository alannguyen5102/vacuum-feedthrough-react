import React from 'react';
import './FormRow.scss';

export default class FormRow extends React.Component {
    render() {
        return (
            <div className="form-row">
                { this.props.children }
            </div>

            
        );
    }
}
