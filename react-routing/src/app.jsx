import React from "react";

import {Link, IndexLink} from 'react-router';

//import our CSS file
//Webpack will actually merge the contents
//of this file into an inline <style></style>
//attribute within the <head> section, so that
//the browser doesn't have to make another
//network request to get the styles!
//note that here we start the path with a `.`
//to signal that this is a relative file
//path and not a module in our node_modules
//directory 
import "./css/main.css";

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <IndexLink to="/" activeClassName="active">Products</IndexLink>
                        </li>
                        <li>
                            <Link to="/cart" activeClassName="active">Cart</Link>
                        </li>
                    </ul>
                </nav>
                <main>                    
                    {this.props.children}
                </main>
            </div>
        );
    }
}
