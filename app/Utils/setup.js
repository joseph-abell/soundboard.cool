import Firebase from 'firebase';
import Cookie from 'tiny-cookie';
import { 
	globalCounter, 
	bearsKilled, 
	baboos,
	wizards,
	neo,
	personalCounter,
	userId,
	addSlackbotMessage,
	addBowserMessage,
	addLuigiMessage,
	addMarioMessage,
	addPeachMessage,
	addToadMessage,
	addYoshiMessage,
	addGeneralChannelMessage,
	addRandomChannelMessage
} from '../Actions';
import Data, { privateConversations } from '../data'
import { soundboardKeyPress } from '../Utils'

let fireRef = new Firebase('https://soundboardcool.firebaseio.com/')

let setupObject = {
	setupSlackValuesInFirebase: (store, gameUser, dataType) => {
		let usernames;
		if (dataType == 'messages') {
			usernames = Data.privateConversations
		} else {
			usernames = Data.channelMessages
		}
		for (let username in usernames) {
			if (!usernames.hasOwnProperty(username)) continue;

			const messages = usernames[username];

   			fireRef.child(gameUser).child(dataType).once("value", function(snapshot) {
			    var data = snapshot.val();
			    if (data === null) {
			    	for (let messageId in messages) {
			    		const message = messages[messageId]

			    		fireRef.child(gameUser).child(dataType).child(username).child(messageId).set({
			    			person: message.person,
			    			time: message.time,
			    			says: message.says
			    		})
			    	}
			    }
			});				
		}
	},
	matchFirebaseValuesToRedux: (store, childName, firebaseReferenceName, action, localValue) => {
		fireRef.child(childName).child(firebaseReferenceName).once("value", function(snapshot) {
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
	matchSlackValuesToRedux: (store, userId, personUserIsTalkingTo, action, messages, messageType) => {
		fireRef.child(userId).child(messageType).child(personUserIsTalkingTo).on('value', (snapshot) => {
			let firebaseMessages = snapshot.val();

			for (let firebaseMessageId in firebaseMessages) {
				const firebaseMessage = firebaseMessages[firebaseMessageId]

				if (messages[firebaseMessageId] === undefined) {
					messages[firebaseMessageId] = firebaseMessage;
					store.dispatch(action(firebaseMessage.time, firebaseMessage.person, firebaseMessage.says));
				}
			}
		})
	},
	watchSlackResultsForChanges: () => {

	},
	init: (store) => {
		soundboardKeyPress();

		let userIdCookie = Cookie.get('userId');

		if ( userIdCookie === null) {
			fireRef.authAnonymously(function(error, authData) {
				Cookie.set('userId', authData.uid)
				userIdCookie = authData.uid
			})	
		}

		store.dispatch(userId(userIdCookie))

		const userIdValue = store.getState('USER_ID').userId;

		setupObject.setupSlackValuesInFirebase(store, userIdValue, 'messages')
		setupObject.setupSlackValuesInFirebase(store, userIdValue, 'channelMessages')

		let globalCounterValue = 0;
		setupObject.matchFirebaseValuesToRedux(store, "global", "globalCounter", globalCounter, globalCounterValue, 'messages');

		let bearsKilledValue = 0;
		setupObject.matchFirebaseValuesToRedux(store, "global", "bearsKilled", bearsKilled, bearsKilledValue, 'messages');

		let babooValue = 0;
		setupObject.matchFirebaseValuesToRedux(store, "global", 'baboos', baboos, babooValue, 'messages');

		let wizardValue = 0;
		setupObject.matchFirebaseValuesToRedux(store, "global", 'wizards', wizards, wizardValue, 'messages');

		let neoValue = 0;
		setupObject.matchFirebaseValuesToRedux(store, "global", 'neo', neo, neoValue, 'messages');

		let personalCounterValue = 0;
		setupObject.matchFirebaseValuesToRedux(store, userIdValue, 'personalCounter', personalCounter, personalCounterValue, 'messages')

		let slackbotMessages = [];
		setupObject.matchSlackValuesToRedux(store, userIdValue, 'slackbot', addSlackbotMessage, slackbotMessages, 'messages');

		let bowserMessages = [];
		setupObject.matchSlackValuesToRedux(store, userIdValue, 'bowser', addBowserMessage, bowserMessages, 'messages');

		let luigiMessages = [];
		setupObject.matchSlackValuesToRedux(store, userIdValue, 'luigi', addLuigiMessage, luigiMessages, 'messages');

		let marioMessages = [];
		setupObject.matchSlackValuesToRedux(store, userIdValue, 'mario', addMarioMessage, marioMessages, 'messages');

		let peachMessages = [];
		setupObject.matchSlackValuesToRedux(store, userIdValue, 'peach', addPeachMessage, peachMessages, 'messages');

		let toadMessages = [];
		setupObject.matchSlackValuesToRedux(store, userIdValue, 'toad', addToadMessage, toadMessages, 'messages');

		let yoshiMessages = [];
		setupObject.matchSlackValuesToRedux(store, userIdValue, 'yoshi', addYoshiMessage, yoshiMessages, 'messages');

		let generalMessages = [];
		setupObject.matchSlackValuesToRedux(store, userIdValue, 'general', addGeneralChannelMessage, generalMessages, 'channelMessages');

		let randomMessages = [];
		setupObject.matchSlackValuesToRedux(store, userIdValue, 'random', addRandomChannelMessage, randomMessages, 'channelMessages');

	}
}

export default setupObject;