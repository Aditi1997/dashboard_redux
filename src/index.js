import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
 
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,
     document.getElementById('root'));
registerServiceWorker();
