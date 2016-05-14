import React, { PropTypes, Component } from 'react';

class KillButton extends Component {
  render() {
    let { buttonState, onButtonClick } = this.props;

    let button;

    if (buttonState === 0) {
      button = <div className="spacebar" id="stopSound" onClick={() => {
        onButtonClick();
      }}>Stop All Sounds</div>
    } else {
      button = <div />
    }

		return (
      <span>{button}</span>
  	)
  }
}

export default KillButton;