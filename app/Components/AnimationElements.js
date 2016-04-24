import React from 'react'

export default class App extends React.Component {
  render() {
    let { animation } = this.props;
    let wizard1Class = "wizard";
    let wizard2Class = "wizard2";

    if (animation === 'Wizard') {
      wizard1Class = "wizard animating";  
      wizard2Class = "wizard2 animating";
    }
    return (<div>
    	<div className={wizard1Class} />
    	<div className={wizard2Class} /> 
    </div>);  
  }
}