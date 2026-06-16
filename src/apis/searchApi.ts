import axios from "axios";

const searchApi = axios.create({
  baseURL: `https://api.mapbox.com/search/geocode/v6`,
  params: {
    limit: 5,
    languate: "es",
    access_token: import.meta.env.VITE_MAPBOX,
  },
});

export default searchApi;
