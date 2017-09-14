import React from "react";
import { Segment, Header, List } from "semantic-ui-react";
import Location from "./location";

const LocationList = ({ locations, onRemove }) => (
  <Segment textAlign="center">
    <Header textAlign="center" as="h3" dividing>
      List Of Locations
    </Header>
    <List horizontal divided relaxed>
      {Object.keys(locations).map(locationsId => (
        <Location
          onRemoveLocation={onRemove}
          key={locationsId}
          id={locationsId}
          name={locations[locationsId].name}
          address={locations[locationsId].address}
          locations={locations[locationsId].locations}
        />
      ))}
    </List>

  </Segment>
);

export default LocationList;
