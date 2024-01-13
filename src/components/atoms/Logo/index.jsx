import { Link } from "react-router-dom";
import Logo from './Logo'

export default function AppLogo() {
  return (
    <Logo>
      <Link to="/">MyBlog</Link>
    </Logo>
  );
}
