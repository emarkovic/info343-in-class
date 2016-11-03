import React from "react";

export default class extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="repo">
				<div className="repo-owner">
					<img src={this.props.repo.owner.avatar_url} alt="picture of owner"/>					
					
				</div>
				<div className="repo-info">
					<h2>{this.props.repo.full_name}</h2>
					<p>{this.props.repo.description}</p>
				</div>
			</div>
		);
	}
}