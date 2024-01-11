import { Link, useRouteLoaderData } from "react-router-dom";

function PostDetail() {
  const data = useRouteLoaderData("post");
  const post = data.post;

  return (
    <main id="post-detail">
      <h1>{post.title}</h1>
      <section id="post-meta">
        <address>
          <Link target="_blank" to={`mailto:${post.author.email}`}>
            {post.author.name}
          </Link>
        </address>{" "}
        |<time dateTime={post.date}>{post.humanReadableDate}</time>
      </section>
      <hr />
      <section>
        <p id="body">{post.body}</p>
      </section>
    </main>
  );
}

export default PostDetail;

export async function loader({request, params}) {
  const id = params.id;
  const url = "http://simpleblogapi-production.up.railway.app/api"
  const response = await fetch(`${url}/posts/${id}`);

  if (!response.ok) {
    throw json({ message: "Error on fetching all Posts." }, { status: 500 });
  } else {
    return response;
  }
}