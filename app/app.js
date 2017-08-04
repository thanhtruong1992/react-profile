import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { HashRouter, Router, Route, Switch} from 'react-router-dom';

require('./assets/css/color.scss');
require('./assets/css/style.scss');

import Login from 'Login';
import Header from 'Header';
import Footer from 'Footer';
import Register from 'Register';
import HomePage from 'HomePage';

injectTapEventPlugin();

ReactDOM.render(
	<Provider>
		<MuiThemeProvider>
			<HashRouter>
				<div>
					<Header />
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
					</Switch>
					<Footer />
				</div>
			</HashRouter>
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root')
);
