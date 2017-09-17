import React from "react";
import { Component } from "react";
import { connect } from "react-redux"; // we can import assitant from dashboard??

import { withRouter } from "react-router-dom";

import { Button, Form, Segment, Input, Label } from "semantic-ui-react";

import { updateCategory } from "../actions/updateCategory";
import { removeCategory } from "../actions/removeCategory";
import { changeInput } from "../actions/changeInput";
import { fetchLocalstorage } from "../actions/fetchLocalstorage";

import EditCategoryHeader from "./editCategoryHeader";



class EditCategory extends Component {
  state = { name: "" };
  componentWillReceiveProps(nextProps) {
    if (
      Object.keys(
        nextProps.categories[this.props.match.params.categoryId]
      ).length !== 0
    ) {
      const { name } = nextProps.categories[this.props.match.params.categoryId];
      this.setState({ name });
    }
  }

  componentWillMount() {
    this.props.fetchLocalstorage();
  
  }

  componentDidMount() {
    if (Object.keys(this.props.categories).length !== 0) {
      const { name } = this.props.categories[
        this.props.match.params.categoryId
      ];

      this.setState({ name });
    } else {
    }

   // window.state = this.state;
  }

  onFormSubmit = data => {
    const categoryId = this.props.match.params.categoryId;
    const history = this.props.history;

    this.props.updateCategory(data, history, categoryId);
  };

  onChangeName = event => {
    // button sends the event, and button don't have value, it's not onChange inside input.
    this.setState({ name: event.target.value });
  };

  onRemoveSubmit = event => {
    event.preventDefault();

    const categoryId = this.props.match.params.categoryId;
    const history = this.props.history;
    this.props.removeCategory(categoryId, history);
  };

  onButtonClick = event => {
    /**
     * Prevent page refresh on button click.
     */
    event.preventDefault();

    /**
     * Cancel form submittion is one of the form fields is empty.
     * 
     *   
     */
    // if (!nameInput.value) return;

    this.onFormSubmit({
      name: this.state.name
    });

    this.setState({ name: "" });
  };

  render() {
    return (
      <Segment.Group>
        <EditCategoryHeader />
        <Segment>Edit Category</Segment>
        <Segment padded>

          <Form>
            <Form.Group>
              <Form.Field>
                <label>Category Name</label>
                <Form.Input
                  style={{ width: "20em" }}
                  //label="Category Name"
                  value={this.state.name}
                  onChange={this.onChangeName}
                  //placeholder={this.state.name}
                  //  ref={el => nameInput = el} 
                />

              </Form.Field>

            </Form.Group>

            <Button onClick={this.onButtonClick} type="submit">
              Update Category
            </Button>
            <Button onClick={this.onRemoveSubmit} type="submit">
              Remove Category
            </Button>
          </Form>

        </Segment>
      </Segment.Group>
    );
  }
}

export default connect(
  state => ({
    categories: state.categories,
    input: state.input
  }),
  { updateCategory, removeCategory, changeInput, fetchLocalstorage }
)(withRouter(EditCategory));
