import React, { Component } from 'react';

class LiveTable extends Component {
  render() {
    return (
      <div>
        <iframe
          width="100%"
          height="100vh"
          style={{ overflow: 'hidden', height: '80vh', display: 'block' }}
          src="https://apifootball.com/widget/display/index.php?display=nextMatch&id=11775"
        />
      </div>
    );
  }
}

export default LiveTable;
