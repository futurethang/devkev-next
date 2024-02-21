import { Client } from "@notionhq/client";

type Project = {
  name: string;
  dateUpdated: string;
  status: string;
  tags: string[];
  description: string;
};

const notion = new Client({
  auth: "secret_Fswgmuowp6RchN85y5x80ZFXYj3paKCuZE4m6GDkDnl",
});

function filterProjects(data: any): Project[] {
  return data.results.map((result: any) => ({
    name: result.properties.Name.title[0].plain_text,
    dateUpdated: result.last_edited_time,
    status: result.properties.Status.status.name,
    tags: result.properties.Tags.multi_select.map((tag: any) => tag.name),
    description: result.properties.Description.rich_text[0]?.plain_text || "",
  }));
}

const getNotionProjects = async () => {
  const databaseId = "75a5937c068d43c38598ac7accdbcf81";
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return filterProjects(response);
};

export default getNotionProjects;
