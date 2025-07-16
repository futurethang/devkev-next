import { groq } from "next-sanity";
import { client } from "./sanity-client";

const lists = {
  blog: "67d6d041-f7f9-48d2-a56e-747c29b917b3",
  article: "fa4789b8-cbc5-4630-84ed-00b51d86a785",
  book: "a259b5b4-06e2-4b52-b51e-bcf2fbde4cae",
};

export async function getAnyList(reference: string) {
  const data = client.fetch(
    groq`*[_type == "post" && references(${reference})] | order(publishedAt desc) {
      _id,
      _createdAt,
      publishedAt,
      slug,
      title,
      author,
      url,
      body,
      image,
      mainImage,
      description,
      categories,
      "tags": tags != null && count(tags) > 0 ? tags[]->{
        title
      } : []
    }`
  );
  return data;
}

// export async function getBlogPosts() {
//   return getAnyList(lists.blog);
// }

export async function getBlogPosts() {
  return client.fetch(
    groq`*[_type == "post" && references('67d6d041-f7f9-48d2-a56e-747c29b917b3')] | order(publishedAt desc) {
      _id,
      _createdAt,
      publishedAt,
      slug,
      title,
      author,
      url,
      body,
      image,
      mainImage,
      description,
      categories,
      "tags": tags[]->{
        title
      }
    }`,
  );
}

export async function getArticleList() {
  return getAnyList(lists.article);
}

export async function getBookList() {
  return getAnyList(lists.book);
}
