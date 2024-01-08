import { useRouteLoaderData } from "react-router-dom";

import AppButton from "../../components/atoms/Button";

import "../../css/forms.css";

function UpdatePost() {
  const data = useRouteLoaderData("post");
  const post = data.post;

  return (
    <main>
      <h1>Update post</h1>
      <form method="post">
        <div className="form-control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            defaultValue={post ? post.title : ""}
            name="title"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="summary">Summary</label>
          <input
            type="text"
            id="summary"
            defaultValue={post ? post.summary : ""}
            name="summary"
            maxLength="255"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="content">Post Content</label>
          <textarea
            id="content"
            name="content"
            required
            rows="5"
            defaultValue={post ? post.body : ""}
          />
        </div>
        <AppButton>Update Post</AppButton>
      </form>
    </main>
  );
}

export default UpdatePost;
