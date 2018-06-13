import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const DashBoardPage = () => <div>Dashboard Page</div>;
const Header = () => (
  <header>
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
    <NavLink to="/student" activeClassName="is-active">Add Student</NavLink>
  </header>
);
const AddStudentPage = () => <div>AddStudentPage</div>;
const NotFoundPage = () => (
  <div>
    Page not Found - <Link to="/">Go Home</Link>
  </div>
);
const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DashBoardPage} exact={true} />
        <Route path="/student" component={AddStudentPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
ReactDOM.render(routes, document.getElementById('app'));
