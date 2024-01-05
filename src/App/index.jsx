import {
  createRoutesFromElements,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Header from "../components/organisms/Header";
import CreatePost from "./CreatePost";
import PostList from "./PostList";
import Error from "./Error";

import "../css/base.css";

const routerDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<PostList />} errorElement={<Error />} />
    <Route path="/posts" element={<PostList />} />
    <Route path="/new-post" element={<CreatePost />} />
  </Route>
);

const router = createBrowserRouter(routerDefinitions);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
