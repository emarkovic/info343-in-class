"use strict";

//base URL for the Spotfiy api
//see https://developer.spotify.com/web-api/search-item/
//The ? separates the URL path from the "query string"
//A query string is a set of name/value pairs. They are
//commonly used in APIs to specify parameters.
//We are passing two parameters here: type=track (search only for tracks)
//and q=... (string to search for, which we will get from the user)
const baseURL = "https://api.spotify.com/v1/search?type=track&q=";


/**
 * SpotifyApp - main application component
 */
class SpotifyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "", 
            tracks: []
        };
    }

    render() {
        return (
            <div>
                <form className="search-form">
                    <div className="input-group">
                        <input type="text" className="form-control"
                            value={this.state.query} 
                            placeholder="what do you want to listen to?"
                            autoFocus                              
                            required />
                        <span className="input-group-btn">
                            <button className="btn btn-primary" 
                                aria-label="search spotify">
                                <span className="glyphicon glyphicon-search" 
                                    aria-hidden="true">
                                </span>
                            </button>
                        </span>
                    </div>
                </form>



            </div>
        );
    }
}

ReactDOM.render(<SpotifyApp/>, document.getElementById("app"));
