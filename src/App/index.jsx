import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./Root";
import RootLayout from "./RootLayout";
import Error from "./Error";
import PostList, { loader as postsLoader } from "./PostList";
import CreatePost, { loader as authorsLoader } from "./CreatePost";
import PostDetail, { loader as postDetailsLoader } from "./PostDetail";
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
        children: [
          { index: true, loader: postsLoader, element: <PostList /> },
          {
            path: ":id",
            id: "post",
            loader: postDetailsLoader,
            children: [
              { index: true, element: <PostDetail /> },
              { path: "edit", element: <UpdatePost /> },
            ],
          },
        ],
      },
      { path: "new-post", element: <CreatePost />, loader: authorsLoader },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
