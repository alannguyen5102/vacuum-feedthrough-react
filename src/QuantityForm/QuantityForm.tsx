import React from 'react';

export default class QuantityForm extends React.Component {
    render() {
        return (
            <div className="input-group">
                <label className="input-group-addon" htmlFor="quantity-box">
                    Quantity*
                </label>
                <input className="form-control" type="number"></input>
            </div>
        );
    }
}
