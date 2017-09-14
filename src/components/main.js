import React from "react";
import { Component } from "react";
import {
  Switch,
  Link,
  withRouter,
  Route,
  BrowserRouter as Router
} from "react-router-dom";
import Locations from "./locations";
import Categories from "./Categories";

import Header from "./header";
import AddLocation from "./addLocation";
import AddCategory from "./addCategory";
import EditCategory from "./editCategory";

import Map from "./map";

import EditLocation from "./editLocation";

const Main = () => (
  <Router>
    <div>
      <div>

        <Route exact path="/" component={Categories} />
        <Route exact path="/locations/:categoryId" component={Locations} />
        <Route exact path="/addcategory" component={AddCategory} />

        <Route path="/addlocation/:categoryId" component={AddLocation} />
        <Route path="/editCategory/:categoryId" component={EditCategory} />

        <Route path="/editlocation/:id" component={EditLocation} />
        <Route path="/map/:location" component={Map} />

      </div>
    </div>
  </Router>
);

export default Main;
