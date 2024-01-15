import { json, redirect } from "react-router-dom";

async function newPostAction({ request, params }) {
  const data = await request.formData();
  const url = "https://simpleblogapi-production.up.railway.app/api"

  const postData = {
    title: data.get("title"),
    summary: data.get("summary"),
    content: data.get("content"),
    author: data.get("author"),
  };

  const response = await fetch(`${url}/posts`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
      mode: "cors",
    }
  );

  if (!response.ok) {
    throw json({ message: "Could not save new Post." }, { status: 500 });
  }

  return redirect("/");
}

async function updatePostAction({ request, params }) {
  const data = await request.formData();
  const id = params.id;
  const url = "https://simpleblogapi-production.up.railway.app/api"

  const postData = {
    title: data.get("title"),
    summary: data.get("summary"),
    content: data.get("content"),
    author: data.get("author"),
  };

  const response = await fetch(`${url}/posts/${id}/edit`,
    {
      method: "PATCH",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    }
  );

  if (!response.ok) {
    throw json({ message: "Could not save new Post." }, { status: 500 });
  }

  return redirect("/");
}


async function deletePostAction({ request, params }) {
  const id = params.id;
  const url = "https://simpleblogapi-production.up.railway.app/api"

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
  return redirect("/");
}


export default {
  newPostAction,
  updatePostAction,
  deletePostAction
}