import React from "react";
import { NavLink } from "react-router-dom";

import AppLogo from "../../atoms/Logo";
import UList from "../../atoms/Ul";
import Header from "./Header";

function AppHeader() {
  return (
    <Header>
      <AppLogo />
      <nav>
        <UList>
          <li>
            <NavLink to="/posts" end>
              All Posts
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-post">Create Post</NavLink>
          </li>
        </UList>
      </nav>
    </Header>
  );
}

export default AppHeader;
