import { groq } from "next-sanity";
import { client } from "./sanity-client";

export async function getArticleList() {
  const data = client.fetch(
    groq`*[_type == "post" && references('fa4789b8-cbc5-4630-84ed-00b51d86a785')] | order(_createdAt desc) {
      _id,
      _createdAt,
      slug,
      title,
      author,
      url,
      link,
      body,
      image,
      mainImage,
      description,
      categories,
      "tags": tags[]->{
        title
      }
    }`
  );
  return data;
}
