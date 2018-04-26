import { LOAD_DASHBOARD_ACTION_TYPES } from './../../actions/dashboard/DashboardActions';

const initialState = {
  sidebar: [],
  cards: [],
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DASHBOARD_ACTION_TYPES.LOAD_SIDEBAR:
      return {
        sidebar: action.payload,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
