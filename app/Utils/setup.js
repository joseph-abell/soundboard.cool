import Firebase from 'firebase';
import Cookie from 'tiny-cookie';
import { 
	globalCounter, 
	bearsKilled, 
	baboos,
	wizards,
	neo,
	personalCounter,
	userId
} from '../Actions';

let fireRef = new Firebase('https://soundboardcool.firebaseio.com/')

let setupObject = {
	setupFirebaseValue: (store, childName, firebaseReferenceName, action, localValue) => {
		fireRef.child(childName).child(firebaseReferenceName).on("value", function(snapshot) {
			let globalValue = snapshot.val();
			if (globalValue === null) {
				store.dispatch(action(0))
				globalValue = 0
			}
			
			if (localValue !== globalValue) {
				localValue = globalValue;
				store.dispatch(action(globalValue))
			}
		});
	},
	init: (store) => {
		let userIdCookie = Cookie.get('userId');

		if ( userIdCookie === null) {
			fireRef.authAnonymously(function(error, authData) {
				Cookie.set('userId', authData.uid)
				userIdCookie = authData.uid
			})	
		}

		store.dispatch(userId(userIdCookie))

		let globalCounterValue = 0;
		setupObject.setupFirebaseValue(store, "global", "globalCounter", globalCounter, globalCounterValue);

		let bearsKilledValue = 0;
		setupObject.setupFirebaseValue(store, "global", "bearsKilled", bearsKilled, bearsKilledValue);

		let babooValue = 0;
		setupObject.setupFirebaseValue(store, "global", 'baboos', baboos, babooValue);

		let wizardValue = 0;
		setupObject.setupFirebaseValue(store, "global", 'wizards', wizards, wizardValue);

		let neoValue = 0;
		setupObject.setupFirebaseValue(store, "global", 'neo', neo, neoValue);

		let personalCounterValue = 0;
		setupObject.setupFirebaseValue(store, store.getState("USER_ID").userId, 'personalCounter', personalCounter, personalCounterValue)	
	}
}

export default setupObject;