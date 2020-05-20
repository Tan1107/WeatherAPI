import React, { Component } from 'react';
import './styles.css'
import { Button } from 'reactstrap';
import {FormGroup} from 'reactstrap'
import {Input} from 'reactstrap'
import {Label} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class ListItem extends Component {
	render() {
		const {item}=this.props;
		const isDoneCLass = item.isDone ? 'isDone' : '';
		return (
			<div className={`list-item ${isDoneCLass}`}>
				<p onClick={this.props.onRemove}>{item.name}</p>
			</div>
		);
}
}
