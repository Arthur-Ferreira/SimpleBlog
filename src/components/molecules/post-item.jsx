import { Link } from "react-router-dom";
function PostItem() {
  return (
    <article class="post-item">
      <h2>{/* <%= post.title %> */}</h2>
      <p class="post-item-author">{/* By <%= post.author_name %> */}</p>
      <p>{/* <%= post.summary %> */}</p>
      <div class="post-actions">
        <form action="/posts/<%= post.post_id %>/delete" method="POST">
          <button class="btn btn-alt">Delete Post</button>
        </form>
        <Link to="/posts/<%= post.post_id %>/edit">Edit Post</Link>
        <Link className="btn" to={"/posts/<%= post.post_id %>"}>
          View Post
        </Link>
      </div>
    </article>
  );
}


export default PostItem;