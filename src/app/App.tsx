import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { Navbar, Theme } from '../components';

import { TrainingDetailsPage, TrainingItemsPage, TrainingPlanPage } from '../features';

import 'semantic-ui-css/semantic.min.css'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    body {
        background: #fafbfc;
    }
`;

const Loader = () => <p>Loading...</p>;

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Theme>
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/" component={TrainingPlanPage} />
            <Route exact path="/trainings" component={TrainingItemsPage} />
            <Route path="/trainings/:id" component={TrainingDetailsPage} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </Theme>
    </Router>
  );
};

export { App };