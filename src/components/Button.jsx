import React from 'react';

class Button extends React.Component {
    state = {
        count: 0,
    }
    render () {
        const { count } = this.state;
        return (
            <div>
            <h1>Manzanas: {count} </h1>
            <button type="button">Click</button>
        </div>
        )
    }
}


export default Button;