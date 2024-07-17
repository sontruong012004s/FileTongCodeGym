import React, { Component } from 'react';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {id: 1, name: "A", price: 20},
                {id: 4, name: "A", price: 2},
                {id: 3, name: "A", price: 25}
            ],
            inpID: "",
            inpName: "",
            inpPrice: "",
        }
    }
    render() {
        return (
        <>
            <h1>Hello</h1>
            {this.state.list.map(e => (
                <h2>{e.id}, {e.name}, {e.price}</h2>
            ))}
            <hr/>
        </>            
        )
    }
}


export default Product;