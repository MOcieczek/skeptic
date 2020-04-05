import React from 'react';
import withRoot from './modules/withRoot'
import ProductHero from './modules/views/ProductHero.js';
import AppFooter from './modules/views/AppFooter.js';
import './App.css';

function Index() {
  return (
    <React.Fragment>      
      <ProductHero />,
      <AppFooter />
    </React.Fragment>
  )
}

export default withRoot(Index)
