import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
import App from './App';
import configureStore from './store/configureStore';


ReactDOM.render(
  <Provider store={configureStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
document.getElementById('root'));


registerServiceWorker();
