//import the React class from the `react` module
//this module is already listed as a dependency
//in our package.json file, so after running
//`npm install`, the "react" module will be in
//our node_modules directory, so we can import it
//simply by using the module name
import React from "react";

//polyfill for the fetch() API so that we can use
//it in Safari and older browsers
//this module was already included in our package.json
//so after you execute `npm install` this module will
//be in the node_modules directory, so we can load it
//simply by importing it's module name
import "whatwg-fetch";

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

//GitHub Search Repos API URL
//for info on the GitHub Search Repos API
//see https://developer.github.com/v3/search/#search-repositories
const githubSearchURL = "https://api.github.com/search/repositories?per_page=30&q=";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                items: []
            }
        };
    }

    render() {
        return (
            <main className="container">
                <h1>Hello React!</h1>
            </main>
        );
    }
}
