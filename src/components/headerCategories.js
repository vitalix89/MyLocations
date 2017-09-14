import React from "react";
import { Component } from "react";
import { Switch, NavLink, withRouter } from "react-router-dom";

import { Menu, Icon } from "semantic-ui-react";

const redirect = (history, to) => {
  history.push(to);
};

const HeaderCategories = withRouter(({
  history
}) => (
  <Menu>

    <Menu.Item
      name="Locations"
      onClick={() => {
        redirect(history, "/");
      }}
    >
      Categories
    </Menu.Item>

    <Menu.Menu position="right">

      <Menu.Item
        name="new-tab"
        onClick={() => {
          redirect(history, "/addcategory");
        }}
      >
        <Icon name="add" />
        Add Category
      </Menu.Item>
    </Menu.Menu>
  </Menu>
));

export default HeaderCategories;
