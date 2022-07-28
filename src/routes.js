import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Search from './Components/Search';
import User from './Components/User';

export default function Routes() {
    return (
        <BrowserRouter>
          <Switch>
              <Route path="/" exact component={Search} />
              <Route path="/user/:username" component={User} />
          </Switch>
        </BrowserRouter>
    );
}