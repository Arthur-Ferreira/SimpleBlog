function UpdatePost() {
  return (
  <main>
    <h1>Update post</h1>
    <form action="/posts/<%= post.post_id %>/edit" method="POST">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" id="title" value="<%= post.title %>" name="title" required />
      </div>
      <div class="form-control">
        <label for="summary">Summary</label>
        <input type="text" id="summary" value="<%= post.summary %>" name="summary" required maxlength="255" />
      </div>
      <div class="form-control">
        <label for="content">Post Content</label>
        <textarea id="content" name="content" required rows="5">
          {/* <%= post.body %> */}
          </textarea>
      </div>
      <button class="btn">Update Post</button>
    </form>
  </main>
  );
}


export default UpdatePost;