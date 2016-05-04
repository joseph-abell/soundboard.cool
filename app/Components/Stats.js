import React, { PropTypes, Component } from 'react';

class Stats extends Component {
  render() {
    let { 
      globalCounter, 
      personalCounter, 
      bearsKilled, 
      baboos,
      wizards,
      neo,
      showStats,
      onStatsClick
    } = this.props;
    let styles;

    if (showStats === true) {
      styles = {
        position: 'fixed',
        top: 0,
        right: 0,
        textAlign: 'right',
        padding: 20,
        background: '#333',
        color: '#fff',
        width: 'auto',
        height: 'auto',
        cursor: 'pointer'
      }
    } else {
      styles = {
        width: 50,
        height: 20,
        overflow: 'hidden',
        top: 0,
        right: 0,
        background: '#333',
        color: '#fff',
        position: 'fixed',
        padding: 10,
        cursor: 'pointer'
      }
    }

    return (
      <div style={styles} onClick={() => {
        onStatsClick(showStats)
      }}>
        {showStats === true && 
          <div>
            <h3>Your Stats</h3>
            <div>Sounds Played: {personalCounter}</div>
            <h3>Global Stats</h3>
            <div>Sounds Played: {globalCounter}</div>
            <div>Bears Killed: {bearsKilled}</div>
            <div>Baboos: {baboos}</div>
            <div>Wizards Summoned: {wizards}</div>
            <div>Became Neo: {neo}</div>
          </div> 
        }
        {showStats === false && <div>Stats</div>}

      </div>
    );
  }
}
export default Stats;