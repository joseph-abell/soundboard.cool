import { connect } from 'react-redux'
import SlackMainContent from '../Components/SlackMainContent'
import Firebase from 'firebase';
import { slackKeyPress } from '../Utils';
import data from '../data';
import {
	addSlackbotMessage,
	addBowserMessage,
	addLuigiMessage,
	addMarioMessage,
	addPeachMessage,
	addToadMessage,
	addYoshiMessage,
	addGeneralChannelMessage,
	addRandomChannelMessage,
	enableCheatMenu
} from '../Actions';


let fireRef = new Firebase('https://soundboardcool.firebaseio.com/');


const mapStateToProps = (state) => {
	slackKeyPress();
	let privateConversations;
	let channelMessages;

	switch(state.slackMainContent.slackContentName) {
		case('slackbot'):
			privateConversations = state.addSlackbotMessage;
			break;
		case('bowser'):
			privateConversations = state.addBowserMessage;
			break;
		case('luigi'):
			privateConversations = state.addLuigiMessage;
			break;
		case('mario'):
			privateConversations = state.addMarioMessage;
			break;
		case('toad'):
			privateConversations = state.addToadMessage;
			break;
		case('peach'):
			privateConversations = state.addPeachMessage;
			break;
		case('yoshi'):
			privateConversations = state.addYoshiMessage;
			break;
		case('general'):
			privateConversations = state.addGeneralChannelMessage;
			break;
		case('random'):
			privateConversations = state.addRandomChannelMessage;
			break;
	}



	return {
		slackContentName: state.slackMainContent.slackContentName,
		slackContentType: state.slackMainContent.slackContentType,
		slackIsOnline: state.slackMainContent.slackIsOnline,
		privateConversations: privateConversations,
		channelMessages: channelMessages,
		userId: state.userId
	}
}

const mapDispatchToProps = (dispatch) => {
	return { 
		onSendMessageClick: (time, person, says, gameUser, messages, contentType) => {
			if (says.length === 0) {
				return false;
			}

			const slackbotActions = data.slackbotActions;
			const slackbotResponses = data.slackbotResponses; 
			let messageType;

			if (contentType === 'personalMessage') {
				messageType = 'messages'
			} else {
				messageType = 'channelMessages'
			}

			if (person === 'slackbot') {
				for (let slackbotActionIndex = 0; slackbotActionIndex < slackbotActions.length; slackbotActionIndex++) {
					const slackbotAction = slackbotActions[slackbotActionIndex];
					for (let respondsToIndex = 0; respondsToIndex < slackbotAction.respondingTo.length; respondsToIndex++) {
						const respondsTo = slackbotAction.respondingTo[respondsToIndex];

						if (says === respondsTo) {
							slackbotAction.action(dispatch, enableCheatMenu, false);
							return false;
						}
					}
				}	
			}

			var messagesLength = messages.length;

			fireRef.child(gameUser).child(messageType).child(person).child(messagesLength).set({
    			person: 'waluigi',
    			time: time,
    			says: says
    		})
			
			if (person === 'slackbot') {
				messagesLength = ++messagesLength;

				for (let slackbotResponseIndex = 0; slackbotResponseIndex < slackbotResponses.length; slackbotResponseIndex++) {
					const slackbotResponse = slackbotResponses[slackbotResponseIndex];

					for (let respondsToIndex = 0; respondsToIndex < slackbotResponse.respondingTo.length; respondsToIndex++) {
						const respondsTo = slackbotResponse.respondingTo[respondsToIndex];

						if (says === respondsTo) {
							fireRef.child(gameUser).child('messages').child(person).child(messagesLength).set({
				    			person: slackbotResponse.response.person,
				    			time: slackbotResponse.response.time,
				    			says: slackbotResponse.response.says
				    		})
						}
					}
				}			
			}
		}
	}
}

const SlackMainContentContainer = connect(mapStateToProps, mapDispatchToProps)(SlackMainContent)

export default SlackMainContentContainer