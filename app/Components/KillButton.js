import React, { PropTypes, Component } from 'react';

class KillButton extends Component {
  render() {
	let { killBearButton, soundManager, onKillBearClick, bearsKilled } = this.props
	if (killBearButton === 2) {
  		return (
  			<div className="row">
  				<div className="spacebar" id="spacebar" onClick={() => {
  					onKillBearClick(soundManager, bearsKilled)
  				}}>Kill Bear</div>
  			</div>
  		)
  	} else {
  		return <span />
  	}
  }
}

export default KillButton;