import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./Root";
import RootLayout from "./RootLayout";
import Error from "./Error";
import PostList, { loader as postsLoader } from "./PostList";
import deletePostAction from "./PostList/action";
import CreatePost, { loader as authorsLoader } from "./CreatePost";
import newPostAction from "./CreatePost/action";
import PostDetail, { loader as postDetailsLoader } from "./PostDetail";
import UpdatePost from "./UpdatePost";
import postUpdateAction from "./UpdatePost/action";

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
          {
            index: true,
            element: <PostList />,
            action: deletePostAction,
            loader: postsLoader,
          },
          {
            path: ":id",
            id: "post",
            loader: postDetailsLoader,
            children: [
              { index: true, element: <PostDetail /> },
              {
                path: "edit",
                element: <UpdatePost />,
                action: postUpdateAction,
              },
              { path: "delete", action: deletePostAction },
            ],
          },
        ],
      },
      {
        path: "new-post",
        element: <CreatePost />,
        action: newPostAction,
        loader: authorsLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
