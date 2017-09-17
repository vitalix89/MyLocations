import React from "react";
import { Component } from "react";
import { Switch, NavLink, withRouter } from "react-router-dom";

import { Menu, Icon } from "semantic-ui-react";

const redirect = (history, to) => {
  history.goBack();
};

const AddLocationHeader = withRouter(props => (
  <Menu>

    

    <Menu.Item
      name="Locations"
      onClick={() => {
        redirect(props.history, "/");
      }}
    >
      Back
    </Menu.Item>

  </Menu>
));

export default AddLocationHeader;
