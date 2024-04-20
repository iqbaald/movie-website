import axios from "axios";

export const getMovieList = async () => {
  const baseUrl = process.env.REACT_APP_BASEURL;
  const apiKey = process.env.REACT_APP_APIKEY;
  const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
  return movie.data.results;
};

export const searchMovie = async () => {
  const search = await axios.get(``);
  return;
};
