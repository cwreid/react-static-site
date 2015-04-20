import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import HomeHandler from './components/Home.js';
import ContactHandler from './components/Contact.js';

let App = React.createClass({
  render() {
    return (
      <div className="nav ui two buttons">
        <Link to="home" className="ui button">Home</Link>
        <Link to="contact" className="ui button">Contact</Link>
        {/* this is the importTant part */}
        <RouteHandler/>
      </div>
    );
  }
});

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="home" path="/home" handler={HomeHandler}/>
    <Route name="contact" path="/contact" handler={ContactHandler}/>
    <DefaultRoute handler={HomeHandler}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
