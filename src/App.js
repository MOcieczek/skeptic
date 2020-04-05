import React from 'react';
import withRoot from './modules/withRoot'
import AppHeader from './modules/views/AppHeader';
import './App.css';

function Index() {
  return (
    <React.Fragment>  
      <AppHeader/>
    </React.Fragment>
  )
}

export default withRoot(Index)
