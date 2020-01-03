import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SendTroops } from '../SendTroops';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { MissionReport } from '../MissionReport';

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/' component={SendTroops} />
          <Route exact path='/missionreport' component={MissionReport} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
