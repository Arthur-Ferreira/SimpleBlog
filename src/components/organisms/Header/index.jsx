import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link to="/">MyBlog</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/posts" end>
              All Posts
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-post">Create Post</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
