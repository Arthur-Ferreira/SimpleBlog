import { useParams } from "react-router-dom";

function PostDetail() {
  const params = useParams();
  
  return (
    <main id="post-detail">
      <h1>
        {params.id}
        {/* <%= post.title %> */}
      </h1>
      <section id="post-meta">
        <address><a href="mailto:<%= post.author_email %>">
          {/* <%= post.author_name %> */}
          </a></address> |
        <time datetime="<%= post.date %>">
          {/* <%= post.humanReadableDate %> */}
          </time>
      </section>
      <hr />
      <section>
        <p id="body">
          {/* <%= post.body %> */}
        </p>
      </section>
    </main>
  );
}

export default PostDetail;