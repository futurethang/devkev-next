import { groq } from "next-sanity";
import { client } from "./sanity-client";

// Modularize this for onlt Blog posts, and create ther utils for the other types of content, Art and Portfolio

// AKA getSanityPosts(), getSanityArt(), getSanityPortfolio()
export async function getSamplePosts() {

  return client.fetch(
    groq`*[_type == "post" && references('45be0681-18a8-485c-95d3-325682e24033')]{
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
  )
}