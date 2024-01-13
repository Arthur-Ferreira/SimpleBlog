import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./Root";
import RootLayout from "./RootLayout";
import Error from "./Error";
import PostList from "./PostList";
import CreatePost from "./CreatePost";
import PostDetail from "./PostDetail";
import UpdatePost from "./UpdatePost";

import appActions from "../utils/actions";
import appLoaders from "../utils/loaders";

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
            action: appActions.deletePostAction,
            loader: appLoaders.postsLoader,
          },
          {
            path: ":id",
            id: "post",
            loader: appLoaders.postDetailsLoader,
            children: [
              { index: true, element: <PostDetail /> },
              {
                path: "edit",
                element: <UpdatePost />,
                action: appActions.updatePostAction,
              },
              { path: "delete", action: appActions.deletePostAction },
            ],
          },
        ],
      },
      {
        path: "new-post",
        element: <CreatePost />,
        action: appActions.newPostAction,
        loader: appLoaders.authorsLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
