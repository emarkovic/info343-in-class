import React from 'react';

export default class extends React.component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="repo">
				<div className="repo-owner">
					<img img={this.props.repo.owner.avatar_url} alit="picture of owner"/>					
					
				</div>
				<div className="repo-info">
					<h2>{this.props.repo.full_name}</h2>
					<p>{this.props.repo.description}</p>
				</div>
			</div>
		)
	}
}