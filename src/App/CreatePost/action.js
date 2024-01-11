import { json, redirect } from "react-router-dom";

export default async function newPostAction({ request, params }) {
  const data = await request.formData();
  const url = "http://simpleblogapi-production.up.railway.app/api"

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

  return redirect("/posts");
}
