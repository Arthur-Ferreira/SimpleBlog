import { Form } from "react-router-dom";

function UpdatePostForm(post) {
  return (
    <Form method="patch">
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
      <button type="submit" className="btn">
        Update Post
      </button>
    </Form>
  );
}

export default UpdatePostForm;
