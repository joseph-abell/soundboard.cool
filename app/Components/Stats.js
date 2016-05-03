import React, { PropTypes, Component } from 'react';

class Stats extends Component {
  render() {
    let { globalCounter, personalCounter, bearsKilled } = this.props;
    let styles = {
      position: 'fixed',
      top: 0,
      right: 0,
      textAlign: 'right',
      padding: 20,
      background: '#333',
      color: '#fff'
    }

    return (
      <div style={styles}>
        <h3>Your Stats</h3>
        <div>Sounds Played: {personalCounter}</div>
        <h3>Global Stats</h3>
        <div>Sounds Played: {globalCounter}</div>
        <div>Bears Killed: {bearsKilled}</div>
      </div>
    );
  }
}
export default Stats;