import React from 'react';
import './SubmitButton.scss';

export default class SubmitButton extends React.Component {
    render() {
        return (
            <button className="btn btn-primary" type="submit">
                { this.props.children }
            </button>
        );
    }
}
