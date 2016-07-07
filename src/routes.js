import React  from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursePage from './components/cource/CoursesPage';

import NotFound from './components/common/NotFound';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="courses" component={CoursePage} />
    <Route path="*" component={NotFound} />
  </Route>
);
