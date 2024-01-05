function PostList() {
  return (
    <main id="all-posts">
      <h1>All Posts</h1>
      {/* <% if(!posts || posts.length === 0) {%> */}
      <p>No posts found - maybe start creating one?</p>
      <a class="btn" href="/new-post">
        Create a new post
      </a>
      {/* <% } else { %> */}
      <ol id="posts-list">
        {/* <% for (const post of posts) { %> */}
        <li>{/* <%- include('includes/post-item', { post: post }) %> */}</li>
        {/* <% } %> */}
      </ol>
      {/* <% } %> */}
    </main>
  );
}

export default PostList;