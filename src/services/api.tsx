import axios from "axios";
import { ResponseData } from "../types";

const ACCESS_KEY = "sA9R9ZVaNwhyuHv6tWgTOkMsW4NV_fhwtV29nsOhneI";

interface Image {
  id: string; // или number, в зависимости от типа id
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;

}

export const requestImages = async (
  query: string,
  page: number
) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      client_id: ACCESS_KEY,
      query,
      page,
      per_page: 12,
      orientation: "landscape",
    },
  });
  return response.data.results;
};
