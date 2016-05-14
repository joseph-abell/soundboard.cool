import React from 'react'
import SlackLineOfText from './SlackLineOfText'
import SlackChannelHeader from './SlackChannelHeader'
import SlackPersonalConversationHeader from './SlackPersonalConversationHeader'

export default class App extends React.Component {
  render() {
  	let { slackIsOnline, slackContentName, slackContentType, onSendMessageClick, userId, privateConversations, channelMessages } = this.props;
  	let onlineStyling;
    let onlineText;
    let conversation;
    let contentType;
    let mainText;

    let input;

  	if (slackIsOnline) {
  		onlineStyling = {
  			float: 'left', 
  			marginRight: 10, 
  			marginTop: 4, 
  			background: 'rgb(113, 190, 88)', 
  			width: 13, 
  			height: 13, 
  			borderRadius: 13
  		}
      onlineText = 'online';
  	} else {
  		onlineStyling = {
  			float: 'left', 
  			marginRight: 10, 
  			marginTop: 4, 
  			background: '#383F45', 
  			width: 13, 
  			height: 13, 
  			borderRadius: 13
  		}
      onlineText = 'away';
  	}

  	if (slackContentType === "personalMessage") {
  		contentType = <SlackPersonalConversationHeader slackContentName={slackContentName} onlineStyling={onlineStyling} onlineText={onlineText} />    
  	} else {
  		contentType = <SlackChannelHeader channelName={slackContentName} />
  	}

    mainText = <div style={{position: "absolute", top: 64, padding: 20, left: 0, right: 0, bottom: 90, overflow: 'auto'}}>
      {
        privateConversations.map((conversationPiece, conversationPieceId) => {
          return <SlackLineOfText key={conversationPieceId} says={conversationPiece.says} person={conversationPiece.person} time={conversationPiece.time} />
        })
      }
    </div>

    return (
	    <div style={{position: 'absolute', top: 0, bottom: 0, left: 220, right: 0, background: '#fff'}}>
      	<div style={{position: 'absolute', top: 10, paddingLeft: 20, left: 0, right: 0, borderBottom: '1px solid #ddd', paddingBottom: 10}}>
          {contentType}
        </div>

        {mainText}

        <div>
          <input type="text" style={
            {
              border: '2px solid rgb(224, 224, 224)', 
              borderRadius: '7px', 
              position: "absolute", 
              display: 'block',
              width: 'calc(100% - 45px)', 
              left: 10, 
              right: 10, 
              bottom: 10, 
              height: 40,
              padding: 10,
              lineHeight: '20px',
              fontSize: 15
            }
          } ref={node => {
            input = node
          }} />
        </div>
        <span id="sendMessage" onClick={() => {
          onSendMessageClick("10.00am", slackContentName, input.value, userId, privateConversations, slackContentType);
          input.value = '';
        }} />
   	  </div>
    );
  }
}