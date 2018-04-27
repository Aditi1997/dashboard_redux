import React, { Component } from 'react';
import { Card }
  from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="voting">
          <Card fluid color="red" header="When did you take a good nap recently?"/>
        </div>

        <div className="dashboard-center">
          {this.props.carousel()}

          <div className="side-cards">
            {this.props.sidecards()}
          </div>

        </div>
      </div>
    )
  }

}
export default Home;
