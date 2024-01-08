import { Link, useNavigate, useSubmit } from "react-router-dom";

import "../../css/posts.css";
import "../../css/forms.css";

function PostItem({ item }) {
  const submit = useSubmit();
  const navigate = useNavigate();

  function deleteHandler() {
    const proceed = window.confirm(
      `Do you really want to Delete post: ${item.title}?`
    );

    if (proceed) {
      submit(null, { method: "delete", action: `${item.post_id}/delete` });
    }
    navigate("/");
  }

  return (
    <article className="post-item">
      <h2>{item.title}</h2>
      <p className="post-item-author">{item.author_name}</p>
      <p>{item.summary}</p>
      <div className="post-actions">
        <button onClick={deleteHandler} className="btn btn-alt">
          Delete Post
        </button>
        <Link to={`${item.post_id}/edit`}>Edit Post</Link>
        <Link className="btn" to={`${item.post_id}`}>
          View Post
        </Link>
      </div>
    </article>
  );
}

export default PostItem;
