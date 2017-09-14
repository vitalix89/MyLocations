export default (state = {}, action) => {
  switch (action.type) {
    case "ADD_CATEGORY":
      const categoryData = (state[action.payload.id] = {
        name: action.payload.name,

        locations: {}
      });
      return { ...state, ...state[categoryData] };

    case "UPDATE_CATEGORY":
      const categoryUpdate = (state[action.payload.id] = {
        name: action.payload.data.name,

        locations: state[action.payload.id].locations
      });

      return { ...state, ...state[categoryUpdate] };

    case "ADD_LOCATION":
      const locationsData = (state[action.payload.categoryId].locations[
        action.payload.locationId
      ] = {
        name: action.payload.name,
        address: action.payload.address,
        locations: action.payload.location
      });

      return { ...state, ...state[locationsData] };

    case "FETCH_CATEGORY_LOCATIONS":
      const categoryLocations = state[action.payload].locations;

      return { ...state };

    case "FETCH_LOCALSTORAGE":
      return { ...state, ...action.payload };

    case "START_EDIT":
      let dataEdit = {};

      dataEdit[action.payload] = { ...state[action.payload] };

      return { ...state, ...dataEdit };

    case "UPDATE_LOCATION":
      const updateLocation = (state[action.payload.categoryId].locations[
        action.payload.locationId
      ] = {
        name: action.payload.data.name,
        address: action.payload.data.address,
        locations: action.payload.data.location
      });

      return { ...state, ...state[updateLocation] };

    case "REMOVE_LOCATION":
      return { ...action.payload };

    case "REMOVE_CATEGORY":
      return { ...action.payload };
    default:
      return state;
  }
};
