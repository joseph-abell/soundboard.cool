import React from 'react'

export default class App extends React.Component {
  render() {
  	let { online, slackMainContent, slackContentType } = this.props;

  	let onlineStyling;
  	let onlineContent;

  	if (online) {
  		onlineStyling = {
  			float: 'left', 
  			marginRight: 10, 
  			marginTop: 4, 
  			background: '#383F45', 
  			width: 13, 
  			height: 13, 
  			borderRadius: 13
  		}
  		onlineContent = <div>
        	<div style={onlineStyling}></div>
        	<div style={{float: 'left', fontSize: 11, opacity: 0.3, lineHeight: '22px'}}>online</div>
        	<div style={{float: 'left', fontSize: 11, opacity: 0.3, padding: '0 5px', lineHeight: '22px'}}>|</div>
        	<div style={{float: 'left', fontSize: 11, opacity: 0.3, lineHeight: '22px'}}>@{slackMainContent}</div>
   	    	<div style={{clear: 'both'}}></div>
  		</div>
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
  		onlineContent = <div>
        	<div style={onlineStyling}></div>
        	<div style={{float: 'left', fontSize: 11, opacity: 0.3, lineHeight: '22px'}}>away</div>
        	<div style={{float: 'left', fontSize: 11, opacity: 0.3, padding: '0 5px', lineHeight: '22px'}}>|</div>
        	<div style={{float: 'left', fontSize: 11, opacity: 0.3, lineHeight: '22px'}}>@{slackMainContent}</div>
   	    	<div style={{clear: 'both'}}></div>
  		</div>
  	}


  	let contentType;

  	if (slackContentType === "personalMessage") {
  		contentType = <div style={{textAlign: 'left'}}>
          <div style={{fontSize: 18, fontWeight: 'bold'}}>{slackMainContent}</div>
          {onlineContent}
        </div>        
  	} else {
  		contentType = <div></div>
  	}
    
    return (
	  <div style={{position: 'absolute', top: 0, bottom: 0, left: 220, right: 0, background: '#fff'}}>
      	<div style={{position: 'absolute', top: 10, paddingLeft: 20, left: 0, right: 0, borderBottom: '1px solid #ddd', paddingBottom: 10}}>
          {contentType}
        </div>

        <div style={{position: "absolute", top: 61, left: 0, right: 0, bottom: 60}}></div>

        <div>
          <input type="text" style={
            {
              border: '2px solid rgb(224, 224, 224)', 
              borderRadius: '7px', 
              position: "absolute", 
              display: 'block',
              width: 'calc(100% - 25px)', 
              left: 10, 
              right: 10, 
              bottom: 10, 
              height: 60,
              lineHeight: '20px',
              fontSize: 15
            }
          } />
        </div>
   	  </div>
    );
  }
}