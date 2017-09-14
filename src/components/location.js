import React, { PropTypes } from "react";
import { List, Image, Rating, Menu, Button, Icon } from "semantic-ui-react";

import { connect } from "react-redux"; // we can import assitant from dashboard??

import { withRouter } from "react-router-dom";

import { startEdit } from "../actions/startEdit";
import { removeLocation } from "../actions/removeLocation";
import { getCoordsFromLocation } from "../actions/getCoordsFromLocation";

const Location = props => (
  <Menu vertical>
    <Menu.Item name={name} onClick={() => {}}>

      <Icon
        onClick={() => {
          const propsData = props.locationsData;
          const categoryId = props.match.params.categoryId;
          const history = props.history;
          const locationId = props.id;
          props.startEdit(propsData, categoryId, locationId, history);
        }}
        name="edit"
        size="large"
      />

      <Icon
        name="marker"
        onClick={() => {
          const history = props.history;

          const name = props.name;
          props.getCoordsFromLocation(name, history);
        }}
        size="large"
      />

      {props.name}
    </Menu.Item>

  </Menu>
);

export default connect(
  state => ({
    locationsData: state.locations
  }),
  { startEdit, removeLocation, getCoordsFromLocation }
)(withRouter(Location));
