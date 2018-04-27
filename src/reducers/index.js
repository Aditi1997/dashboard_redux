import { combineReducers } from 'redux';
import dashboardReducer from './dashboard/DashboardReducer';

const rootReducer = combineReducers({
  loadStore: dashboardReducer,
});

export default rootReducer;
