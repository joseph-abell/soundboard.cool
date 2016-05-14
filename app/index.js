import React from 'react';
import Firebase from 'firebase'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import soundboardApp from './Reducers';
import App from './Components/App';
import setup from './Utils/setup';

let store = createStore(soundboardApp);

render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('app')
);

setup.init(store)