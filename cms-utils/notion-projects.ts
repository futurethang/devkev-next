import { Client } from "@notionhq/client";

export type Project = {
  name: string;
  dateUpdated: string;
  status: string;
  tags: string[];
  description: string;
};

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const filterProjects = (data: any): Project[] => {
  if (!data || !data.results || !Array.isArray(data.results)) {
    return [];
  }
  
  return data.results.map((result: any) => ({
    name: result.properties?.Name?.title?.[0]?.plain_text || "Untitled Project",
    dateUpdated: result.last_edited_time || new Date().toISOString(),
    status: result.properties?.Status?.status?.name || "Unknown",
    tags: result.properties?.Tags?.multi_select?.map((tag: any) => tag.name) || [],
    description: result.properties?.Description?.rich_text?.[0]?.plain_text || "No description available",
  }));
};

export const getNotionProjects = async () => {
  const databaseId = "75a5937c068d43c38598ac7accdbcf81";
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        and: [
          {
            property: "Publish",
            checkbox: {
              equals: true,
            },
          },
          {
            property: "Domain",
            title: {
              equals: "CodeWerkz",
            },
          },
        ],
      },
    });
    return filterProjects(response);
  } catch (error) {
    console.error(`Data Retrieval Error: ${error}`);
    return [];
  }
};
