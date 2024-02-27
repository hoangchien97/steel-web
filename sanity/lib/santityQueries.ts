import { groq } from "next-sanity";

export const getHomePageQuery = groq`*[_type == "homepage"][0] {
  _id,
  title,
  description,
  images,
}`;
