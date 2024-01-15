import { Link, useNavigate, useSubmit } from "react-router-dom";

export default function PostActions() {
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
    <div className="post-actions">
      <button onClick={deleteHandler} className="btn --alt">
        Delete Post
      </button>
      <Link to={`${item.post_id}/edit`}>Edit Post</Link>
      <Link className="btn" to={`${item.post_id}`}>
        View Post
      </Link>
    </div>
  );
}
