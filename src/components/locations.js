import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import LocationList from "./locationList";
import EditLocation from "./editLocation";
import { Segment, Header, List } from "semantic-ui-react";
import HeaderLocations from "./headerLocations";
import { withRouter } from "react-router-dom";

import { addToLocalstorage } from "../actions/addToLocalstorage";
import { fetchLocalstorage } from "../actions/fetchLocalstorage";

class Locations extends Component {
  state = { locations: {} };

  componentWillReceiveProps(nextProps) {
    if (
      Object.keys(
        nextProps.categories[this.props.match.params.categoryId].locations
      ).length !== 0
    ) {
      const { locations } = nextProps.categories[
        this.props.match.params.categoryId
      ];

      this.setState({ locations });
    }
  }

  componentWillMount() {}
  componentDidMount() {
    if (Object.keys(this.props.categories).length !== 0) {
      const { locations } = this.props.categories[
        this.props.match.params.categoryId
      ];

      this.setState({ locations });
    } else {
    }

    if (Object.keys(this.props.categories).length === 0) {
      this.props.fetchLocalstorage();
    }
    this.props.addToLocalstorage(this.props.categories);
  }

  render() {
    return (
      <div>
        <HeaderLocations />
        <Header textAlign="center" as="h3" dividing>
          Locations
        </Header>
        <LocationList
          onRemove={this.onRemoveLOcation}
          locations={this.state.locations}
        />

      </div>
    );
  }
}

export default connect(
  state => ({
    categories: state.categories
  }),
  { addToLocalstorage, fetchLocalstorage }
)(withRouter(Locations));
