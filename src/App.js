import React from 'react';

import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import PhantomPage from './components/PhantomPage'
import Footer from './components/Footer'

/*------------------------- */
/* Main Driver of the app   */
/*------------------------- */

const App = () => (
  <div>
    <Header/>
    <Main/> 
    <PhantomPage/>
    <Footer/>
  </div>
)

export default App;
