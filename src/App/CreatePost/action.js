import { json, redirect } from "react-router-dom";

export default async function postDetailAction({ request, params }) {
  const data = await request.formData();

  const postData = {
    title: data.get("title"),
    summary: data.get("summary"),
    content: data.get("content"),
    author: data.get("author"),
  };

  const response = await fetch("http://localhost:8080/api/posts",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    }
  );

  if (!response.ok) {
    throw json({ message: "Could not save new Post." }, { status: 500 });
  }

  return redirect("/posts");
}
