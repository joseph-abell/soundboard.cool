import React from 'react'

export default class App extends React.Component {
  render() {
    let { person, time, says } = this.props;

    let image;

    switch (person) {
      case ("slackbot") :
        image = "./images/slackbot.jpg";
        break;
      case ("waluigi") :
        image = "./images/IT_slack_icons_Waluigi-36px_01.jpg";
        break;
      case ('bowser'):
        image = "./images/IT_slack_icons_Bowser-36px_01.jpg";
        break;
      case ('luigi'):
        image = "./images/IT_slack_icons_Luigi-36px_01.jpg";
        break;
      case ('mario'):
        image = "./images/IT_slack_icons_Mario-36px_01.jpg";
        break;
      case ('peach'):
        image = "./images/IT_slack_icons_Peach-36px_01.jpg";
        break;
      case ('toad'):
        image = "./images/IT_slack_icons_Toad-36px_01.jpg";
        break;
      case ('yoshi'):
        image = "./images/IT_slack_icons_Yoshi-36px_01.jpg";
        break;
      default:
        image = ""
        break;
    }

    return (
      <div style={{marginBottom: 10, position: 'relative', textAlign: 'left'}}>
        <img src={image} style={
          {
            float: 'left', 
            position: 'absolute', 
            width: 36, 
            height: 36, 
            left: 0,
            borderRadius: 4, 
            marginRight: 10
          }
        } />
        <div style={{float: 'left'}}>
          <div style={{ float: 'left', marginRight: 10, marginLeft: 46, fontSize: '15px'}}>{person}</div>
          <div style={{ float: 'left', fontSize: '12px', lineHeight: '18px', color: '#ddd'}}>{time}</div>
          <div style={{ clear: 'both'}} />
          <div style={{ float: 'left', marginLeft: 46}}>{says}</div>
        </div>
        <div style={{clear: 'both'}} />
      </div>
    )
  }
}