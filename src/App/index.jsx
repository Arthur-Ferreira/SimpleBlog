import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./Root";
import Error from "./Error";
import PostList from "./PostList";
import CreatePost from "./CreatePost";
import PostDetail from "./PostDetail";
import UpdatePost from "./UpdatePost";

import "../css/base.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <PostList /> },
      { path: "posts", element: <PostList /> },
      { path: "posts/:id", element: <PostDetail /> },
      { path: "new-post", element: <CreatePost /> },
      { path: "posts/:id/edit", element: <UpdatePost /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
