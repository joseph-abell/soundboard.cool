import './main.css';
import React from 'react';
import Firebase from 'firebase'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import soundboardApp from './Reducers';
import { globalCounter, bearsKilled } from './Actions';
import App from './Components/App';
import './Utils';

let store = createStore(soundboardApp);
let fireRef = new Firebase('https://soundboardcool.firebaseio.com/')

render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('app')
);

let globalCounterLocalValue = 0;
fireRef.child("globalCounter").on("value", function(snapshot) {
	let globalCounterGlobalValue = snapshot.val();
	
	if (globalCounterLocalValue !== globalCounterGlobalValue) {
		globalCounterLocalValue = globalCounterGlobalValue;
		store.dispatch(globalCounter(globalCounterGlobalValue))
	}
});

let bearsKilledLocalValue = 0;
fireRef.child("bearsKilled").on("value", function(snapshot) {
	let bearsKilledGlobalValue = snapshot.val();

	if (bearsKilledLocalValue !== bearsKilledGlobalValue) {
		bearsKilledLocalValue = bearsKilledGlobalValue;
		store.dispatch(bearsKilled(bearsKilledGlobalValue))
	}
});