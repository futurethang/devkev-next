import { groq } from "next-sanity";
import { client } from "./sanity-client";

export async function getBookList() {
  const data = client.fetch(
    groq`*[_type == "post" && references('a259b5b4-06e2-4b52-b51e-bcf2fbde4cae')] | order(_createdAt desc) {
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
