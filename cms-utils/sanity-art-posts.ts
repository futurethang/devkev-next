import { groq } from "next-sanity";
import { client } from "./sanity-client";

export async function getArtworks() {
  return client.fetch(
    groq`
    *[_type == "post" && references('e8c8597a-b53b-4afc-b50b-de5f3b527f04')] {
      title,
      author,
      slug,
      body,
      mainImage,
      categories,
    }`
  );
}
