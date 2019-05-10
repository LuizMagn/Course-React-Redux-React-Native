import React, { Component } from 'react';

export default class ShoppingList extends Component {
    render() {
        return(
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}

// return React.createElement('div', { className: 'shopping-list' },
//     React.createElement('h1', /* ... h1 children ... */),
//     React.createElement('ul', /* ... ul children ... */)
// );