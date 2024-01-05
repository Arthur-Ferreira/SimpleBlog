import AppButton from "../components/atoms/Button";

import "../css/forms.css";


function CreatePost() {
  return (
    <main>
    <h1>Add a new post</h1>
    <form action="/posts" method="POST">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" id="title" name="title" required />
      </div>
      <div class="form-control">
        <label for="summary">Summary</label>
        <input type="text" id="summary" name="summary" required maxlength="255" />
      </div>
      <div class="form-control">
        <label for="content">Post Content</label>
        <textarea id="content" name="content" required rows="5"></textarea>
      </div>
      <div class="form-control">
        <label for="author">Select Author</label>
        <select id="author" name="author">
          {/* <% for(const author of authors) { %>
            <option value="<%= author.id %>"><%= author.name %></option>
            <% } %> */}
        </select>
      </div>
      <AppButton>
        Add Post
        </AppButton>
    </form>
  </main>
  );
}


export default CreatePost;