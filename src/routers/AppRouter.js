import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import DashBoardPage from '../components/DashBoardPage';
import AddStudentPage from '../components/AddStudentPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import EdiStudentPage from '../components/EdiStudentPage';

const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={DashBoardPage} exact={true} />
          <Route path="/student" component={AddStudentPage} />
          <Route path="/edit-student/:id" component={EdiStudentPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );

export default AppRouter;