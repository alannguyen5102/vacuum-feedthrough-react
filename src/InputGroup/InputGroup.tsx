import React from 'react';
import './InputGroup.scss';

export default class InputGroup extends React.Component {
    render() {
        return (
            <div className="input-group">
                { this.props.children }
            </div>
        );
    }
}
