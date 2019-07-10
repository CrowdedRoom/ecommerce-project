import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

const HatsPage = () => {
  return (
    <div>
      <h1>Hats For Sale</h1>
    </div>
  );
};

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
      <Route exact path='/shop/hats' component={HatsPage} />
      <Route exact path='/shop/jackets' component={HatsPage} />
      <Route exact path='/shop/shoes' component={HatsPage} />
    </Switch>
  );
}

export default App;
