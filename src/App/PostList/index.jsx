import { Link, json, useLoaderData } from "react-router-dom";
import PostItem from "../../components/molecules/post-item";

function PostList() {
  const data = useLoaderData();
  const posts = data.posts;

  return (
    <main id="all-posts">
      <h1>All Posts</h1>
      {!posts || posts.length === 0 ? (
        <>
          <p>No posts found - maybe start creating one?</p>
          <Link className="btn" to="/new-post">
            Create a new post
          </Link>
        </>
      ) : (
        <ol id="posts-list">
          {posts.map((post) => (
            <li key={post.post_id}>
              <PostItem item={post} />
            </li>
          ))}
        </ol>
      )}
    </main>
  );
}

export default PostList;

export async function loader() {
  let url = "http://simpleblogapi-production.up.railway.app/api"
  const response = await fetch(`${url}/posts`);

  if (!response.ok) {
    throw json({ message: "Error on fetching all Posts." }, { status: 500 });
  } else {
    return response;
  }
}
