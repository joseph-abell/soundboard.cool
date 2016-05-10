import React, { PropTypes, Component } from 'react';

class NumberKey extends Component {
  render() {
  	const { 
  		numberKey, 
  		isPlaying, 
  		onNumberKeyPress, 
  		soundboard, 
  		enabled,
  		killBearButton,
      cheatMenu
  	} = this.props;

	if (killBearButton === 0 && enabled === true) {
		return (<div className="key" id={"key"+numberKey} onClick={() => {
			onNumberKeyPress(numberKey)
		}}>{numberKey}</div>)
	} else {
    	return (<div className="key disabled">{numberKey}</div>)
	}
  }
}

NumberKey.propTypes = {
	numberKey: PropTypes.string.isRequired,
	onNumberKeyPress: PropTypes.func.isRequired,
	soundboard: PropTypes.string.isRequired
};

export default NumberKey;