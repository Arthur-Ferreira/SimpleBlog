import { json } from "react-router-dom";

export async function postsLoader() {
  let url = "https://simpleblogapi-production.up.railway.app/api"
  const response = await fetch(`${url}/posts`);

  if (!response.ok) {
    throw json({ message: "Error on fetching all Posts." }, { status: 500 });
  } else {
    return response;
  }
}

async function authorsLoader() {
  const url = "https://simpleblogapi-production.up.railway.app/api";
  const response = await fetch(`${url}/authors`);

  if (!response.ok) {
    throw json({ message: "Error on fetching all Posts." }, { status: 500 });
  } else {
    return response;
  }
}


export async function postDetailsLoader({request, params}) {
  const id = params.id;
  const url = "https://simpleblogapi-production.up.railway.app/api"
  const response = await fetch(`${url}/posts/${id}`);

  if (!response.ok) {
    throw json({ message: "Error on fetching all Posts." }, { status: 500 });
  } else {
    return response;
  }
}

export default {
  authorsLoader,
  postDetailsLoader,
  postsLoader
}