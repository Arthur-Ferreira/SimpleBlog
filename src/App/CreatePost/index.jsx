import { Form, json, useLoaderData } from "react-router-dom";

import AppButton from "../../components/atoms/Button";

import "../../css/forms.css";

function CreatePost() {
  const data = useLoaderData();
  const authors = data.authors;

  return (
    <main>
      <h1>Add a new post</h1>
      <Form method="post">
        <div className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" required />
        </div>
        <div className="form-control">
          <label htmlFor="summary">Summary</label>
          <input
            type="text"
            id="summary"
            name="summary"
            maxLength="255"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="content">Post Content</label>
          <textarea id="content" name="content" required rows="5" />
        </div>
        <div className="form-control">
          <label htmlFor="author">Select Author</label>
          <select id="author" name="author">
            {authors.map((author) => (
              <option key={author.name} value={author.id}>
                {author.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn">Add Post</button>
      </Form>
    </main>
  );
}

export default CreatePost;

export async function loader() {
  const response = await fetch("http://localhost:8080/api/authors");

  if (!response.ok) {
    throw json({ message: "Error on fetching all Posts." }, { status: 500 });
  } else {
    return response;
  }
}

