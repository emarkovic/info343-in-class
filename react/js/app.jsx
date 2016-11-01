/**
 * app.jsx
 * main entry point for our React application
 */
"use strict";

class NameForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: ''
		}
	}

	handleChange(event) {
		this.setState({name: event.target.value});
		this.props.onChange(event.target.value);
	}

	render() {
		return (
			<form id='NameForm'>
				<input 
					className='form-control' 
					type='text'
					value={this.state.name}
					onChange={event => this.handleChange(event)}
				/>
			</form>
		);
	}
}

class Hello extends React.Component {
	constructor(props) {
		super(props);

	}

	//returns some html markup that this component adds to the page
	render() {
		return (
			<h2> Hello {this.props.title} {this.props.name}!</h2>
		);
	}
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {name: ''};	
	}

	handleNameChange(name) {
		this.setState({name: name})
	}	

	render() {
		return (
			<div>
				<NameForm 
					onChange={name => this.handleNameChange(name)}
				/>
				<Hello name={this.state.name} />
			</div>
		);
	}
}


ReactDOM.render(<App />, document.getElementById('app'));