import { fetchsidebar } from './../../services/sidebarApi';
import { fetchCards } from './../../services/cardsApi';

const LOAD_DASHBOARD_ACTION_TYPES = {
  LOAD_SIDEBAR: 'DashboardActions/LOAD_SIDEBAR',
  LOAD_CARDS: 'DashboardActions/LOAD_CARDS',
}
const loadDashboardActions = {
  loadInitialData: () => (dispatch) => {
    fetchsidebar().then((response) => {
      response.json().then((data) => {
        console.log(data);
        dispatch(loadDashboardActions.loadSidebarStore(data));
      })
    });
  },

  loadSidebarStore: payload => ({ type: LOAD_DASHBOARD_ACTION_TYPES.LOAD_SIDEBAR, payload })

};

export {
  LOAD_DASHBOARD_ACTION_TYPES,
  loadDashboardActions,
};
