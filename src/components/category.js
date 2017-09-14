import React, { PropTypes } from "react";
import {
  List,
  Image,
  Rating,
  Menu,
  Button,
  Icon,
  Header
} from "semantic-ui-react";

import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

import { editCategory } from "../actions/editCategory";

import { removeCategory } from "../actions/removeCategory";
import { getCoordsFromLocation } from "../actions/getCoordsFromLocation";
import { fetchLocations } from "../actions/fetchLocations";

const activeItem = "";

const Category = (
  {
    locations,
    name,
    address,
    id,
    fetchLocations: dispatchLocations,
    editCategory: dispatchEdit,
    history: dispatchHistory,
    categoriesData: categoriesProps,
    removeCategory: dispatchRemove,
    getCoordsFromLocation: dispatchCoords
  }
) => (
  <Menu vertical>
    <Menu.Item
      name={name}
      onClick={() => {
        dispatchLocations(id, dispatchHistory);
      }}
    >

      {name}
    </Menu.Item>

    <Menu.Item>
      <Header textAlign="center">
        <Icon
          name="edit"
          size="large"
          onClick={() => {
            const dataCategories = categoriesProps;
            dispatchEdit(id, dispatchHistory, dataCategories);
          }}
        />
      </Header>

    </Menu.Item>

  </Menu>
);

export default connect(
  state => ({
    categoriesData: state.categories
  }),
  { editCategory, removeCategory, fetchLocations, getCoordsFromLocation }
)(withRouter(Category));
