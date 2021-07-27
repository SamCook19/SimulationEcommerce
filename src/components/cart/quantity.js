import React, { Component } from 'react';

class Quantity extends Component {
    render() {
        const { className, quantity } = this.props;
        return (
            <div className={`${className} quantity`}>
                <div className='quantity__count'>
                    {quantity}
                </div>
                <div className='quantity__plus'>
                    Add
                </div>
                <div className='quantity__minus'>
                    Subtract
                </div>
            </div>

        )
    }
}

export default Quantity;