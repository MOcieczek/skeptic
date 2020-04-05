import React from 'react';
import withRoot from './modules/withRoot'
import AppHeader from './modules/views/AppHeader';
import AppFooter from './modules/views/AppFooter.js';
import './App.css';

function Index() {
  return (
    <React.Fragment>  
      <AppHeader/>
      <AppFooter />
    </React.Fragment>
  )
}

export default withRoot(Index)
