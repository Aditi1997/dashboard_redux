import React, { Component } from 'react';
import {
  Sidebar,
  Segment,
} from 'semantic-ui-react';
import SideBar from './commons/SideBar';
import TopBar from './commons/TopBar';

class Userprofile extends Component {
  render() {
    return (
      <div className="user-profile">
        <div className="sidebar">
          <Sidebar.Pushable as={Segment}>
            <SideBar />
            <Sidebar.Pusher>
              <Segment basic>
                <div className="dashboard-content">
                  <div className="topbar">
                    <TopBar />
                  </div>
                </div>
                <div>
                <img src="https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201606271147" />
                </div>
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      </div>
    );
  }
}

export default Userprofile;
