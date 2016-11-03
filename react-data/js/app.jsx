"use strict";

//main application React component
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <h1>Hello React!</h1>
            </div>
        );
    }
}

//render the App component to the element with id="app"
ReactDOM.render(<App/>, document.getElementById("app"));
