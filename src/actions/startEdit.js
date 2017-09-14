export const startEdit = (data, categoryId, locationId, history) =>
  dispatch => {
    history.push(`/editlocation/${locationId}`, categoryId);
  };
