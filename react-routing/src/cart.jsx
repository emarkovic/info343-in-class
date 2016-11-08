import React from "react";

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <h1>Cart View</h1>
                <p>Contents of your shopping cart</p>
            </div>
        );
    }
}
