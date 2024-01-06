import { useNavigate } from "react-router-dom";
import AppButton from "../components/atoms/Button";
import AppLabel from "../components/atoms/Label";
import AppInput from "../components/atoms/Input";
import AppTextArea from "../components/atoms/TextArea";

import "../css/forms.css";

function CreatePost() {
  const navigagte = useNavigate();

  function navigateHandler() {
    navigagte("/");
  }

  return (
    <main>
      <h1>Add a new post</h1>
      <form action="/posts" method="POST">
        <div className="form-control">
          <AppLabel htmlFor="title">Title</AppLabel>
          <AppInput type="text" id="title" name="title" required />
        </div>
        <div className="form-control">
          <AppLabel htmlFor="summary">Summary</AppLabel>
          <AppInput
            type="text"
            id="summary"
            name="summary"
            maxLength="255"
            required
          />
        </div>
        <div className="form-control">
          <AppLabel htmlFor="content">Post Content</AppLabel>
          <AppTextArea
            id="content"
            name="content"
            required
            rows="5"
          ></AppTextArea>
        </div>
        <div className="form-control">
          <AppLabel htmlFor="author">Select Author</AppLabel>
          <select id="author" name="author">
            {/* <% for(const author of authors) { %>
            <option value="<%= author.id %>"><%= author.name %></option>
            <% } %> */}
          </select>
        </div>
        <AppButton onClick={navigateHandler}>Add Post</AppButton>
      </form>
    </main>
  );
}

export default CreatePost;
