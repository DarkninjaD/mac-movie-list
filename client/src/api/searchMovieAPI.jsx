const searchMovieAPI = async (searchString) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  if (!searchString) {
    searchString = "";
  }
  return await fetch(
    `http://localhost:8080/api/movies?name=${searchString}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log("error", error));
};
export default searchMovieAPI;
