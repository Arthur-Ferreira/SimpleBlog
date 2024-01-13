import { NavLink } from "react-router-dom";

import AppLogo from "../../atoms/Logo";
import Header from "./Header";

function AppHeader() {
  return (
    <Header>
      <AppLogo />
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
    </Header>
  );
}

export default AppHeader;
