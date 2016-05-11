import React from 'react'
import Data from '../data'
import SlackLineOfText from './SlackLineOfText'
import SlackPersonalConversationHeader from './SlackPersonalConversationHeader'

export default class App extends React.Component {
  render() {
  	let { slackIsOnline, slackMainContent, slackContentType } = this.props;
    let { privateConversations } = Data;
  	let onlineStyling;
    let onlineText;
    let conversation;
    let contentType;

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

    if (privateConversations[slackMainContent]) {
      conversation = <div style={{textAlign: "left", padding: '10px 20px'}}>
        {privateConversations[slackMainContent].map ( (item) => {
          return <SlackLineOfText key={item.id} says={item.says} person={item.person} time={item.time} />
        })}
      </div>
    } else {
      conversation = <div />
    }  

  	if (slackContentType === "personalMessage") {
  		contentType = <SlackPersonalConversationHeader slackMainContent={slackMainContent} onlineStyling={onlineStyling} onlineText={onlineText} />      
  	} else {
  		contentType = <div></div>
  	}
    
    return (
	    <div style={{position: 'absolute', top: 0, bottom: 0, left: 220, right: 0, background: '#fff'}}>
      	<div style={{position: 'absolute', top: 10, paddingLeft: 20, left: 0, right: 0, borderBottom: '1px solid #ddd', paddingBottom: 10}}>
          {contentType}
        </div>

        <div style={{position: "absolute", top: 64, left: 0, right: 0, bottom: 90, overflow: 'auto'}}>
          {conversation}         
        </div>

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
          } />
        </div>
   	  </div>
    );
  }
}