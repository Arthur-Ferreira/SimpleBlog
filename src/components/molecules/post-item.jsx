import { Link } from "react-router-dom";

import '../../css/posts.css'

function PostItem({item}) {
  return (
    <article className="post-item">
      <h2>{item.title}</h2>
      <p className="post-item-author">{item.author_name}</p>
      <p>{item.summary}</p>
      <div className="post-actions">
        <form action="/posts/<%= post.post_id %>/delete" method="POST">
          <button className="btn btn-alt">Delete Post</button>
        </form>
        <Link to={`${item.post_id}/edit`}>Edit Post</Link>
        <Link className="btn" to={`${item.post_id}`}>
          View Post
        </Link>
      </div>
    </article>
  );
}


export default PostItem;