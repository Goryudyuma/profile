import React, { Component } from 'react';
import { AppBar, Drawer, MenuItem } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as Colors from 'material-ui/styles/colors';
import './App.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

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
				<Drawer
					docked={false}
					width={200}
					open={this.state.open}
					onRequestChange={(open) => this.setState({open})}
				>
					<MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
					<MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
				</Drawer>
			</div>
		);
	}
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
