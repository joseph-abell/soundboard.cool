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
        background: '#ddd',
        color: '#333',
        width: 'auto',
        height: 'auto',
        cursor: 'pointer',
        borderBottomLeftRadius: 3,
        borderBottom: "1px solid #333",
        borderLeft: "1px solid #333"
      }
    } else {
      styles = {
        width: 38,
        height: 20,
        overflow: 'hidden',
        top: 0,
        right: 0,
        background: '#ddd',
        color: '#333',
        position: 'fixed',
        padding: 10,
        cursor: 'pointer',
        borderBottomLeftRadius: 3,
        borderBottom: "1px solid #333",
        borderLeft: "1px solid #333"
      }
    }

    return (
      <div style={styles} onClick={() => {
        onStatsClick(showStats)
      }}>
        {showStats === true && 
          <div>
            <h3 style={{marginTop: 0, marginBottom: 5}}>Your Stats</h3>
            <div>Sounds Played: {personalCounter}</div>
            <h3 style={{marginBottom: 5}}>Global Stats</h3>
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