import React from 'react';
import { render } from 'react-dom'
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App';
import Footer from './components/Footer/Footer'

render([<App key="1" />, <Footer key="2" />], document.getElementById('root'));
registerServiceWorker();
