export default (state = {}, action) => {
  switch (action.type) {
    case "INPUT_UPDATE":
      return {
        ...state,
        name: action.payload.name,
        address: action.payload.address,
        locations: action.payload.locations
      };

    default:
      return state;
  }
};
