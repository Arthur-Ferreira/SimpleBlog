import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./Root";
import RootLayout from "./RootLayout";
import Error from "./Error";
import PostList, { loader as postsLoader } from "./PostList";
import CreatePost from "./CreatePost";
import PostDetail from "./PostDetail";
import UpdatePost from "./UpdatePost";

import "../css/base.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <RootLayout /> },
      {
        path: "posts",
        element: <PostList />,
        loader: postsLoader,
      },
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
