import React from "react";

/**
 * SearchForm - implements a simple search form
 * This is a reusable React component that will
 * render a typical search form using Bootstrap
 * style classes. It will call the function 
 * passed in the `onSearch` property when the  
 * user submits the form. The search query string 
 * will be passed as the first parameter to that
 * callback function.
 */
export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {query: ""};
    }

    handleChange(event) {
        this.setState({query: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.props.onSearch) {
            this.props.onSearch(this.state.query);
        }
    }

    render() {
        return (
            <form className="search-form"
                    onSubmit={event => this.handleSubmit(event)} >
                <div className="input-group">
                    <input type="text" className="form-control"
                            value={this.state.query} 
                            placeholder={this.props.placeholder || "what are you looking for?"}
                            onChange={event => this.handleChange(event)} />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-primary" 
                            aria-label="search">
                            <span className="glyphicon glyphicon-search" 
                                aria-hidden="true">
                            </span>
                        </button>
                    </span>
                </div>
            </form>
        );
    }
}