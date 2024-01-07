import { Link, json, useRouteLoaderData } from "react-router-dom";

function PostDetail() {
  const data = useRouteLoaderData('post');
  const post = data.post

  return (
    <main id="post-detail">
      <h1>
        {post.title}
      </h1>
      <section id="post-meta">
        <address><Link target="_blank" to={`mailto:${post.author_email}`}>
          {post.author_name}
          </Link></address> |
        <time dateTime={post.date}>
          {post.humanReadableDate}
          </time>
      </section>
      <hr />
      <section>
        <p id="body">
          {post.body}
        </p>
      </section>
    </main>
  );
}

export default PostDetail;


export async function loader({request, params}) {
  const id = params.id;
  const response = await fetch(`http://localhost:8080/api/posts/${id}`);

  if (!response.ok) {
    throw json(
      { message: "Error on fetching all Posts." }, 
      { status: 500 }
    );
  } else { 
    return response;
  }
}
