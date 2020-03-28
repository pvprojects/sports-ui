import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/main';
import Address from './pages/address';

const Routes = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/address/:id" component={Address} />
        </Switch>
    </BrowserRouter>
);

export default Routes;