import { useLoaderData } from "react-router-dom";

const Post = () => {
  const info = useLoaderData();
  return (
    <div>
      <h1>{info.data.title}</h1>
      <p>{info.data.body}</p>
    </div>
  );
};

export default Post;

export const recuperarPost = async ({ params }) => {
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data = await post.json();

  return { data };
};
