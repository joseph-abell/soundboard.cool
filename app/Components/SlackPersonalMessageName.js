import React from 'react'

export default class App extends React.Component {
  render() {
    let { userName, online, onPersonalMessageClick } = this.props;
    let onlineIconStyling;

    if (online) {
      onlineIconStyling = {
        float: 'left', 
        marginRight: 10, 
        marginTop: 2, 
        background: 'rgb(113, 190, 88)', 
        width: 13, 
        height: 13, 
        borderRadius: 13
      };
    } else {
      onlineIconStyling = {
        float: 'left', 
        marginRight: 10, 
        marginTop: 2, 
        background: '#383F45', 
        width: 13, 
        height: 13, 
        borderRadius: 13
      };
    }

    return (
      <div style={{marginBottom: 5, cursor: 'pointer'}} onClick={
        () => {
          onPersonalMessageClick(userName, online)
        }
      }>
        <div style={onlineIconStyling}></div>
        <div style={{float: 'left', opacity: 0.5}}>{userName}</div>
        <div style={{clear: 'both'}}></div>
      </div>
    );
  }
}