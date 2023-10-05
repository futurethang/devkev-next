import { groq } from "next-sanity";
import { client } from "./sanity-client";

// Modularize this for onlt Blog posts, and create ther utils for the other types of content, Art and Portfolio

// AKA getSanityPosts(), getSanityArt(), getSanityPortfolio()
export async function getSanityClient() {
  return client.fetch(
    groq`*[_type == "post"]{
      _id,
      _createdAt,
      slug,
      title,
      author,
      url,
      body,
      image,
      mainImage,
      categories,
      }
    `
  );
}
