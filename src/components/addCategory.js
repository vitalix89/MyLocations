import React from "react";
import { Component } from "react";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

import { Button, Form, Segment, Input, Label } from "semantic-ui-react";

import AddCategoryHeader from "./addCategoryHeader";

import { addCategory } from "../actions/addCategory";

let nameInput;
let addressInput;
let locationInput;

const AddCategory = (
  {
    isDisabled = false,
    addCategory: dispatchCategory,
    history: dispatchHistory
  }
) => {
  const onFormSubmit = data => {
    dispatchCategory(data, dispatchHistory);
  };

  const onButtonClick = event => {
    /**
     * Prevent page refresh on button click.
     */
    event.preventDefault();

    /**
     * Cancel form submittion is one of the form fields is empty.
     * 
     *   
     */
    if (!nameInput.value) return;

    const formData = {
      name: nameInput.value
    };

    onFormSubmit(formData);
    nameInput.value = "";
  };

  const changeChecker = () => {
    //   const { name, username, password } = formData;
    if (!nameInput.val) {
      return (isDisabled = true);
    }

    return (isDisabled = false);
  };

  return (
    <Segment.Group>
      <AddCategoryHeader />
      <Segment>Add New Category</Segment>
      <Segment padded>

        <Form onChange={changeChecker}>
          <Form.Group>

            <input
              style={{ width: "20em" }}
              //label="Category Name"
              placeholder="Category Name"
              ref={el => nameInput = el}
            />

          </Form.Group>

          <Button disabled={isDisabled} onClick={onButtonClick} type="submit">
            Add Category
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
  { addCategory }
)(withRouter(AddCategory));
