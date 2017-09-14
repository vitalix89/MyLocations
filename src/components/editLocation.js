import React from "react";
import { Component } from "react";
import { connect } from "react-redux"; // we can import assitant from dashboard??

import { withRouter } from "react-router-dom";

import { Button, Form, Segment, Input, Label } from "semantic-ui-react";
import EditLocationHeader from "./editLocationHeader";

import { updateLocation } from "../actions/updateLocation";
import { changeInput } from "../actions/changeInput";
import { fetchLocalstorage } from "../actions/fetchLocalstorage";
import { removeLocation } from "../actions/removeLocation";

let nameInput;
let addressInput;
let locationInput;

class EditLocation extends Component {
  state = {
    name: "",
    address: "",
    locations: ""
  };
  componentWillReceiveProps(nextProps) {
    if (
      Object.keys(
        nextProps.categories[this.props.location.state].locations
      ).length !== 0
    ) {
      const { address, locations, name } = nextProps.categories[
        this.props.location.state
      ].locations[nextProps.match.params.id];
      this.setState({ name, address, locations });
    }
  }

  componentWillMount() {
    this.props.fetchLocalstorage();
    if (Object.keys(this.props.categories).length === 0) {
    }
  }

  componentDidMount() {
    if (Object.keys(this.props.categories).length !== 0) {
      const { address, locations, name } = this.props.categories[
        this.props.location.state
      ].locations[this.props.match.params.id];

      this.setState({ name, address, locations });
    } else {
    }

    window.state = this.state;
  }

  onFormSubmit = data => {
    const history = this.props.history;
    const locationId = this.props.match.params.id;
    const categoryId = this.props.location.state;
    this.props.updateLocation(data, history, locationId, categoryId);
  };

  onRemoveSubmit = event => {
    event.preventDefault();

    const locationId = this.props.match.params.id;
    const categoryId = this.props.location.state;
    const history = this.props.history;
    this.props.removeLocation(categoryId, locationId, {}, history);
  };

  onChangeName = event => {
    this.setState({ name: event.target.value });
  };

  onChangeAddress = event => {
    this.setState({ address: event.target.value });
  };

  onChangeLocation = event => {
    this.setState({ locations: event.target.value });
  };

  onButtonClick = event => {
    /**
     * Prevent page refresh on button click.
     */
    event.preventDefault();

    //  console.log(" formData formData", addressInput.val);

    /**
     * Cancel form submittion is one of the form fields is empty.
     * 
     *   
     */
    if (!nameInput.value || !addressInput.value || !locationInput.value) return;

    const formData = {
      name: nameInput.value,
      address: addressInput.value,
      location: locationInput.value
    };

    this.onFormSubmit(formData);
    this.setState({ name: "", address: "", locations: "" });
  };

  changeChecker = () => {
    if (!nameInput.value || !addressInput.value || !locationInput.value) {
      return (isDisabled = true);
    }

    return (isDisabled = false);
  };

  render() {
    return (
      <Segment.Group>
        <EditLocationHeader />
        <Segment>Edit Location</Segment>
        <Segment padded>

          <Form>

            <Form.Group>
              <Form.Field>
                <label> Name</label>
                <input
                  style={{ width: "20em" }}
                  //label="Category Name"
                  onChange={this.onChangeName}
                  value={this.state.name}
                  placeholder="Category Name"
                  ref={el => nameInput = el}
                />

              </Form.Field>

            </Form.Group>
            <Form.Group>
              <Form.Field>
                <label>Address</label>
                <input
                  style={{ width: "20em" }}
                  //label="Category Name"
                  onChange={this.onChangeAddress}
                  placeholder="Address"
                  value={this.state.address}
                  ref={el => addressInput = el}
                />
              </Form.Field>

            </Form.Group>
            <Form.Group>
              <Form.Field>
                <label>Coordinates</label>
                <input
                  style={{ width: "20em" }}
                  //label="Category Name"
                  onChange={this.onChangeLocation}
                  value={this.state.locations}
                  placeholder="Coordinates"
                  ref={el => locationInput = el}
                />
              </Form.Field>

            </Form.Group>
            <Button onClick={this.onButtonClick} type="submit">
              Update Location
            </Button>
            <Button onClick={this.onRemoveSubmit} type="submit">
              Remove Location
            </Button>
          </Form>

        </Segment>
      </Segment.Group>
    );
  }
}

export default connect(
  state => {
    return {
      categories: state.categories,
      input: state.input
    };
  },
  { updateLocation, changeInput, fetchLocalstorage, removeLocation }
)(withRouter(EditLocation));
