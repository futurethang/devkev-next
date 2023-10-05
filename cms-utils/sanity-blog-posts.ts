import { groq } from "next-sanity";
import { client } from "./sanity-client";

// Modularize this for onlt Blog posts, and create ther utils for the other types of content, Art and Portfolio

// AKA getSanityPosts(), getSanityArt(), getSanityPortfolio()
export async function getBlogPosts() {
  return client.fetch(
    groq`*[_type == "post" && references('67d6d041-f7f9-48d2-a56e-747c29b917b3')]{
      _id,
      _createdAt,
      slug,
      title,
      author,
      url,
      body,
      image,
      mainImage,
      description,
      categories,
      }
    `
  );
}
