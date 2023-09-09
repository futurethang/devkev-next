import { groq } from "next-sanity";
import { client } from "./sanity-client";

// Modularize this for onlt Blog posts, and create ther utils for the other types of content, Art and Portfolio

// AKA getSanityPosts(), getSanityArt(), getSanityPortfolio()
export async function getReadingList() {

  return client.fetch(
    groq`*[_type == "readingListEntry"]{
      _id,
      _createdAt,
      title,
      link,
      previewImage,
      shortSummary,
      detailedSummary,
      "tags": tags[]->title,
      featured
      }
    `
  )
}