import React from "react";
import { Component } from "react";
import { Switch, NavLink, withRouter } from "react-router-dom";

import { Menu, Icon } from "semantic-ui-react";

const redirect = (history, to) => {
  history.push(to);
};

const HeaderLocations = withRouter(props => (
  <Menu>

    <Menu.Item
      name="Locations"
      onClick={() => {
        redirect(props.history, "/");
      }}
    >
      Categories
    </Menu.Item>

    <Menu.Menu position="right">

      <Menu.Item
        name="new-tab"
        onClick={() => {
          redirect(
            props.history,
            `/addlocation/${props.match.params.categoryId}`
          );
        }}
      >
        <Icon name="add" />
        Add Location
      </Menu.Item>
    </Menu.Menu>
  </Menu>
));

export default HeaderLocations;
