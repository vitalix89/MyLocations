import React from "react";
import { Segment, Header, List } from "semantic-ui-react";
import Category from "./category";

const CategoryList = ({ categories, onRemove }) => (
  <Segment textAlign="center">
    <Header textAlign="center" as="h3" dividing>
      List Of Categories
    </Header>
    <List horizontal divided relaxed>
      {Object.keys(categories).map(categoriesId => (
        <Category
          onRemoveLocation={onRemove}
          key={categoriesId}
          id={categoriesId}
          name={categories[categoriesId].name}
        />
      ))}
    </List>

  </Segment>
);

export default CategoryList;
