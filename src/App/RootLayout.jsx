import { Link } from "react-router-dom";
import "../css/forms.css";

function RootLayout() {
  return (
    <main>
      <h1>Welcome to MyBlog!</h1>
      <p>
        Click here to: <Link to="posts">See all posts</Link> 
      </p>
      <p>
        Or here to: <Link to="new-post">Create a new post</Link>
      </p>
    </main>
  );
}

export default RootLayout;
