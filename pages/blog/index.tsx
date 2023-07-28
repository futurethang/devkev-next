// pages/index.js
import { createClient } from "next-sanity";

interface Post {
  _createdAt: string,
  _id: string,
  _rev: string,
  _type: string,
  _updatedAt: string,
  title: string,
}

interface Props {
  posts: Post[];
}

export default function IndexPage({ posts }: Props) {
  console.log(posts)
  return (
    <>
      <header>
        <h1>Sanity + Next.js</h1>
      </header>
      <main>
        <h2>posts</h2>
        {posts.length > 0 && (
          <ul>
            {posts.map((post) => (
              <li key={post._id}>{post?.title}</li>
            ))}
          </ul>
        )}
        {posts.length == 0 && <p>No posts to show</p>}
        {posts.length > 0 && (
          <div>
            <pre>{JSON.stringify(posts, null, 2)}</pre>
          </div>
        )}
        {posts.length == 0 && (
          <div>
            <div>¯\_(ツ)_/¯</div>
            <p>
              Your data will show up here when you've configured everything
              correctly
            </p>
          </div>
        )}
      </main>
    </>
  );
}

const client = createClient({
  projectId: "rkukjvpf",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false
});

export async function getStaticProps() {
  // const pets = [
  //   {
  //     _createdAt: "2022-03-08T09:28:00Z",
  //     _id: "1f69c53d-418a-452f-849a-e92466bb9c75",
  //     _rev: "xnBg0xhUDzo561jnWODd5e",
  //     _type: "pet",
  //     _updatedAt: "2022-03-08T09:28:00Z",
  //     name: "Capybara"
  //   }
  // ];

  const posts = await client.fetch(`*[_type == "post"]`);

  return {
    props: {
      posts
    }
  };
}