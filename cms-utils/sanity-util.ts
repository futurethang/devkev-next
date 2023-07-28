import { createClient, groq } from "next-sanity";

export async function getSanityClient() {
  const projectId = process.env.SANITY_PROJECT_ID;
  const dataset = process.env.SANITY_DATASET;
  const client = createClient({
    projectId,
    dataset,
    apiVersion: "2022-03-25",
    useCdn: false,
  });

  return client.fetch(
    groq`*[_type == "post"]{
      _id,
      _createdAt,
      "slug": slug.current,
      title,
      author,
      url,
      }
    `
  )
}