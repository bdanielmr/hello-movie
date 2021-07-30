/* eslint-disable prettier/prettier */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes.js';

// Quitado el modo estricto debido al codigo antiguo
// eslint-disable-next-line react/prop-types
export default function ViewsRouter(props) {
  return (
    <Router>
      <Views />
    </Router>
  );
}

// eslint-disable-next-line react/prop-types
function Views({ dataId, cToken, aToken, stylePa }) {
  // eslint-disable-next-line prefer-const

  return (
    <Switch>
      {routes.map((route, i) => {
        return (
          <Route
            key={i}
            path={`${route.path}`}
            render={(props) => <route.component {...props} />}
            exact={route.exact}
          />
        );
      })}
    </Switch>
  );
}
