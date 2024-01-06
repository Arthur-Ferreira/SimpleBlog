import { Link } from "react-router-dom";

function Anchor({children}) {
  return (
    <Link className="btn" to="/new-post">{children}</Link>
  );
}

export default Anchor;