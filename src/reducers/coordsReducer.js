const INITIAL_STATE = { lat: 0, lng: 0 };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_COORDS":
      const locations = {
        lat: action.payload.lat,
        lng: action.payload.lng
      };

      return { ...locations };

    default:
      return state;
  }
};
