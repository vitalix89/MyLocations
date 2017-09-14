export const getCoordsFromLocation = (name, history) => dispatch => {
  const address = name;

  const geocoder = new google.maps.Geocoder();
  geocoder.geocode(
    {
      address: address
    },
    (results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        const lat = results[0].geometry.location.lat();
        const lng = results[0].geometry.location.lng();

        dispatch({ type: "UPDATE_COORDS", payload: { lat: lat, lng: lng } });
        navigator.vibrate(150);
        history.push(`/map/${name}`);
      } else {
        alert("Something got wrong " + status);
      }
    }
  );
};
