import React, { Component } from 'react';
import DashboardRoutes from './routes/DashboardRoutes';
import './styles/App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <DashboardRoutes />
      </div>
    );
  }
}

export default App;
