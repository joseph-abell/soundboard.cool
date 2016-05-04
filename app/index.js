import './main.css';
import React from 'react';
import Firebase from 'firebase'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import soundboardApp from './Reducers';
import { 
	globalCounter, 
	bearsKilled, 
	baboos,
	wizards,
	neo
} from './Actions';
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

function setupFirebaseValue (firebaseReferenceName, action, localValue) {
	fireRef.child(firebaseReferenceName).on("value", function(snapshot) {
		let globalValue = snapshot.val();
		
		if (localValue !== globalValue) {
			localValue = globalValue;
			store.dispatch(action(globalValue))
		}
	});
}

let globalCounterLocalValue = 0;
setupFirebaseValue("globalCounter", globalCounter, globalCounterLocalValue);

let bearsKilledLocalValue = 0;
setupFirebaseValue("bearsKilled", bearsKilled, bearsKilledLocalValue);

let babooLocalValue = 0;
setupFirebaseValue('baboos', baboos, babooLocalValue);

let wizardLocalValue = 0;
setupFirebaseValue('wizards', wizards, wizardLocalValue);

let neoLocalValue = 0;
setupFirebaseValue('neo', neo, neoLocalValue);