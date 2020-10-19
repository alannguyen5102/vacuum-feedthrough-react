import React from 'react';
import './SectionLabel.scss';

export default class SectionLabel extends React.Component {
    render() {
        return (
            <label className="control-label">{ this.props.children }</label>
        );
    }
}
