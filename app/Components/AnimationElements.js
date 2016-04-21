import React from 'react'

export default class App extends React.Component {
  render() {
    let { animation } = this.props;

    if (animation === 'Wizard') {
      return (<div id="animElement1" className="wizard"></div>);  
    } else {
      return <span />
    }
  }
}