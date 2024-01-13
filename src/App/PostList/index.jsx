import { Link, useLoaderData } from "react-router-dom";
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
