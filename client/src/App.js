import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import Header from './components/Header/Header'
import Main from './components/Main'

/*------------------------- */
/* Main Driver of the app   */
/*------------------------- */

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#333399',
    },
    secondary: {
      main: '#3399FF',
      //main: '#FFFFFF',
    },
    light: {
      main: '#3366CC',
    },
    overrides: {
      Tabs: {
        background: '#ede7f6',
      }
    }
  },
});


class App extends Component{ 
  render(){
    return(
      <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="Site" id="outer-container">
          <Header/>
          <Main/>
        </div>
      </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}

export default App;
