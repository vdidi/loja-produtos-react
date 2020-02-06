import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Produtos from './pages/produtos';
import Carrinho from './pages/carrinho';

export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Produtos} />
      <Route path='/carrinho' component={Carrinho} />
    </Switch>
  )
}