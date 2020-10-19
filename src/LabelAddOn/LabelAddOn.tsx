import React from 'react';
import './LabelAddOn.scss';

interface IProps {
    htmlFor: string;
}

export default class LabelAddOn extends React.Component<IProps> {
    render() {
        return (
            <label className="input-group-addon" htmlFor={this.props.htmlFor}>
                { this.props.children }
            </label>
        );
    }
}
