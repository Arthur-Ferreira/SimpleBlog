import { Link } from "react-router-dom";

function Header() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link to="/">MyBlog</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/posts">All Posts</Link>
          </li>
          <li>
            <Link to="/new-post">Create Post</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;