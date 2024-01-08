import { json } from "react-router-dom";

export default async function deletePostAction({ request, params }) {
  const id = params.id;

  const response = await fetch(`http://localhost:8080/api/posts/${id}/delete`, {
    method: request.method,
  });

  if (!response.ok) {
    throw json(
      { message: 'Could not delete Post.' },
      {
        status: 500,
      }
    );
  }
}