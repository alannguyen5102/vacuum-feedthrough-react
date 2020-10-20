import React from 'react';
import './DisclaimerText.scss';

export default class DisclaimerText extends React.Component {
    render() {
        return (
            <h6>
                { this.props.children }
            </h6>
        );
    }
}
