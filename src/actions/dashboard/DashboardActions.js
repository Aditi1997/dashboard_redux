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
        dispatch(loadDashboardActions.loadStore(data));
      })
    });
  },

  loadCards: () => (dispatch) => {
    fetchCards().then((response1) => {
      response1.json().then((data1) => {
        dispatch(loadDashboardActions.loadStore1(data1));
      })
    });
  },

  loadStore: payload => ({ type: LOAD_DASHBOARD_ACTION_TYPES.LOAD_SIDEBAR, payload }),
  loadStore1: payload => ({ type: LOAD_DASHBOARD_ACTION_TYPES.LOAD_CARDS, payload })

};

export {
  LOAD_DASHBOARD_ACTION_TYPES,
  loadDashboardActions,
};
