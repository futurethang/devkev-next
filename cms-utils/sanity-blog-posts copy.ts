import { groq } from "next-sanity";
import { client } from "./sanity-client";

export async function getArtworks() {

  return client.fetch(
    groq`
    *[_type == "posts" && "Artwork" in categories[]->slug.current] {
      ...,
      categories[] -> {
        title,
        slug
      },
    }`
  )
}
