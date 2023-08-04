import { groq } from "next-sanity";
import { client } from "./sanity-client";

export async function getSamplePosts() {

  return client.fetch(
    groq`*[_type == "post" && references('45be0681-18a8-485c-95d3-325682e24033')]{
      _id,
      _createdAt,
      slug,
      title,
      author,
      url,
      description,
      body,
      image,
      mainImage,
      categories,
      }
    `
  )
}