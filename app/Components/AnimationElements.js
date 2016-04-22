import React from 'react'

export default class App extends React.Component {
  render() {
    let { animation } = this.props;
    let wizardClasses = "wizard";
    if (animation === 'Wizard') {
      wizardClasses = "wizard animating";  
    }
    return (<div id="animElement1" className={wizardClasses}></div>);  
  }
}