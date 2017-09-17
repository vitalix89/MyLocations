import React from "react";
import { Component } from "react";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

import { Button, Form, Segment, Input, Label } from "semantic-ui-react";

import AddLocationHeader from "./addLocationHeader";

import { addLocation } from "../actions/addLocation";

let nameInput;
let addressInput;
let locationInput;

const AddLocation = props => {
  const onFormSubmit = data => {
    const historyProp = props.history;
    const categoryId = props.match.params.categoryId;
    props.addLocation(data, historyProp, categoryId);
  };

  const onButtonClick = event => {
    event.preventDefault();

    if (!nameInput.value || !addressInput.value || !locationInput.value) return;

    const formData = {
      name: nameInput.value,
      address: addressInput.value,
      location: locationInput.value
    };

    onFormSubmit(formData);
    nameInput.value = "";
    addressInput.value = "";
    locationInput.value = "";
  };

  return (
    <Segment.Group>
      <AddLocationHeader />
      <Segment>Add New Location</Segment>
      <Segment padded>

        <Form>
          <Form.Group>

            <input
              style={{ width: "20em" }}
              //label="Category Name"
              placeholder="Name"
              ref={el => nameInput = el}
            />

          </Form.Group>
          <Form.Group>

            <input
              style={{ width: "20em" }}
              //label="Category Name"
              placeholder="Address"
              ref={el => addressInput = el}
            />
          </Form.Group>
          <Form.Group>

            <input
              style={{ width: "20em" }}
              //label="Category Name"
              placeholder="Coordinates"
              ref={el => locationInput = el}
            />
          </Form.Group>
          <Button
            // disabled={props.isDisabled}
            onClick={onButtonClick}
            type="submit"
          >
            Add Location
          </Button>
        </Form>

      </Segment>
    </Segment.Group>
  );
};

export default connect(
  state => ({
    location: state.location
  }),
  { addLocation }
)(withRouter(AddLocation));
