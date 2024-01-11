import { json } from "react-router-dom";

export default async function deletePostAction({ request, params }) {
  const id = params.id;
  const url = "http://simpleblogapi-production.up.railway.app/api"

  const response = await fetch(`${url}/posts/${id}/delete`, {
    method: request.method,
    mode: "cors",
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