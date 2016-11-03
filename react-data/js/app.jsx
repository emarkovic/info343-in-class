"use strict";

var female = BABYNAMES.filter(record => 'F' === record.sex);
                                                //descending sort
var topFemNames = female.sort((rec1, rec2) => rec2.count - rec1.count).slice(0, 100);

// console.log(topFemNames)

//main application React component
class App extends React.Component {
    constructor(props) {
        super(props);
    }    

    render() {
        var meta = {
            count: {
                type: columnTypes.numeric,
                caption: 'num babies'
            }
        }
        return (
            <div className="container">
                <h1>Most popular female baby names from 1996</h1>
                <DataTable records={topFemNames} colMeta={meta}/>
            </div>
        );
    }
}

//render the App component to the element with id="app"
ReactDOM.render(<App records={topFemNames}/>, document.getElementById("app"));
