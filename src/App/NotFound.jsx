import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main>
      <h1>We could not find this resource!</h1>
      <p>Unfortunately, we were not able to find this resource.</p>
      <Link className="btn" to="/">
        Back To Safety!
      </Link>
    </main>
  );
}


export default NotFound;