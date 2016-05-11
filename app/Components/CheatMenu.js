import React from 'react'
import SlackChannelName from '../Containers/SlackChannelName'
import SlackPersonalMessageName from '../Containers/SlackPersonalMessageName'
import SlackMainContent from '../Containers/SlackMainContent'

export default class App extends React.Component {
  render() {
  	const { cheatMenu } = this.props;

    if (cheatMenu === true) {
      return (
        <div className="header" style={
          {
            position: 'absolute', 
            top: 0,
            bottom: 0, 
            left: 0, 
            right: 0, 
            zIndex: 2, 
            background: '#fff', 
            paddingTop: 20, 
            color: "rgb(56, 63, 69)"
          }
        }>
          <div style={{position: 'absolute', top: 0, bottom: 0, left: 0, width: 188, paddingLeft: 16, paddingRight: 16, background: 'rgb(248, 248, 250)'}}>
            <div style={{fontFamily: 'sans-serif', fontSize: '18px', fontWeight: 900, color: '#383F45', paddingTop: 10, textAlign: 'left'}}>Yoshi Sucks</div>
            <div>
              <div style={{width: 10, height: 10, float: 'left', borderRadius: 10, background: 'rgb(113, 190, 88)', marginTop: 7, marginRight: 10}}></div>
              <div style={{color: '#383F45', opacity: 0.6, float: 'left', marginTop: 2}}>waluigi</div>
              <div style={{clear: 'both'}}></div>
            </div>

            <div style={{marginTop: 20}}>
              <div style={{float: 'left', textTransform: 'uppercase', fontSize: '12.8px', fontWeight: 'bold', color: '#383F45', opacity: 0.5 }}>Channels (2)</div>
              <div style={{float: 'right', border: "2px solid #383F45", borderRadius: 13, height: 13, width: 13, lineHeight: '13px', color: '#383F45', opacity: 0.3}}>+</div>
              <div style={{clear: 'both'}}></div>
            </div>
            
            <div style={{textAlign: 'left', paddingTop: 10}}>
              <SlackChannelName channelName="general" />
              <SlackChannelName channelName="random" />
            </div>

            <div style={{marginTop: 40}}>
              <div style={{float: 'left', textTransform: 'uppercase', fontSize: '12.8px', fontWeight: 'bold', color: '#383F45', opacity: 0.5 }}>Direct Messages (12)</div>
              <div style={{float: 'right', border: "2px solid #383F45", borderRadius: 13, height: 13, width: 13, lineHeight: '13px', color: '#383F45', opacity: 0.3}}>+</div>
              <div style={{clear: 'both'}}></div>
            </div>

            <div style={{paddingTop: 10, paddingLeft: 5}}>
              <SlackPersonalMessageName userName="suckbot" online={true} />
              <SlackPersonalMessageName userName="bowser" online={false} />
              <SlackPersonalMessageName userName="luigi" online={false} />
              <SlackPersonalMessageName userName="mario" online={false} />
              <SlackPersonalMessageName userName="peach" online={false} />
              <SlackPersonalMessageName userName="toad" online={false} />
              <SlackPersonalMessageName userName="yoshi" online={false} />
            </div>
          </div>
          <SlackMainContent />
        </div>
      )
    }	else {
      return <span />
    }
  }
}