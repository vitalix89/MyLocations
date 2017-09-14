import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import CategoryList from "./categoryList";
import EditLocation from "./editLocation";
import { Segment, Header, List } from "semantic-ui-react";

import HeaderCategories from "./headerCategories";

import { addToLocalstorage } from "../actions/addToLocalstorage";
import { fetchLocalstorage } from "../actions/fetchLocalstorage";
import { removeLocation } from "../actions/removeLocation";

class Categories extends Component {
  componentWillMount() {}
  componentDidMount() {
    if (Object.keys(this.props.categories).length === 0) {
      this.props.fetchLocalstorage();
    }
    this.props.addToLocalstorage(this.props.categories);
  }

  onRemoveLOcation = id => {
    this.props.removeLocation(id);
  };

  render() {
    return (
      <div>
        <HeaderCategories />
        <Header textAlign="center" as="h3" dividing>
          Categories
        </Header>
        <CategoryList
          onRemove={this.onRemoveLOcation}
          categories={this.props.categories}
        />

      </div>
    );
  }
}

export default connect(
  state => ({
    categories: state.categories
  }),
  { addToLocalstorage, fetchLocalstorage, removeLocation }
)(Categories);
