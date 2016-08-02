import React, { Component } from 'react';
import { AppBar, Drawer, MenuItem } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as Colors from 'material-ui/styles/colors';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import './App.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


let profiletext = 
{
	'Affiliation': {
		'Title': '所属',
		'Text': '信州大学工学部情報工学科4年'
	},
	'Twitter': {
		'Title': 'Twitter',
		'Text': 'https://twitter.com/Goryudyuma'
	},
	'Mail': {
		'Title': 'Mail',
		'Text': 'Goryudyuma@gmail.com'
	}
}

class CardExampleWithoutAvatar extends Component {
	render() {
		return(
			<Card key={this.props.content} style={{'textAlign': 'left'}}>
				<CardHeader
					title={this.props.content.Title}
					actAsExpander={true}
				/>
				<CardText >
					{this.props.content.Text}
				</CardText>
			</Card>
		)
	};
}

class Content extends Component {

	render = () => (
		<div>
			<CardExampleWithoutAvatar content={profiletext.Affiliation} />
			<CardExampleWithoutAvatar content={profiletext.Twitter} />
			<CardExampleWithoutAvatar content={profiletext.Mail} />
		</div>
	);
}

class Title extends Component {
	render = () => (
		<AppBar
			title="Goryudyuma"
			style={{backgroundColor:Colors.blue700}}
			iconClassNameRight="muidocs-icon-navigation-expand-more"
			onLeftIconButtonTouchTap={this.props.menu}
			onTitleTouchTap={this.props.menu}
		/>
	);
}

class Menu extends Component {

	componentWillMount = () => {
		this.setState({oepn: false});
	}

	handleToggle = () => this.setState({open: !this.state.open});

	handleClose = () => this.setState({open: false});

	render() {
		return (
			<div>
				<Title menu={this.handleToggle}/>
				<Content />
			</div>
		)
	/*
		return (
			<div>
				<Title menu={this.handleToggle}/>
				<Drawer
					docked={false}
					width={200}
					open={this.state.open}
					onRequestChange={(open) => this.setState({open})}
				>
					<MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
					<MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
				</Drawer>
				<Content />
			</div>
		);
		*/
	}
}

class App extends Component {
	render() {
		return (
			<div className="App">
				<MuiThemeProvider>
					<Menu/>
				</MuiThemeProvider>
			</div>
		);
	}
}

export default App;
