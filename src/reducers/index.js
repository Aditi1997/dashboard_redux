import { combineReducers } from 'redux';
import dashboardReducer  from './dashboard/DashboardReducer';

const rootReducer = combineReducers({
  loadSidebarStore: dashboardReducer,
});

export default rootReducer;
