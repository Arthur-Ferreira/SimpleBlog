import { Link } from "react-router-dom";

import Header from "../components/organisms/Header";

function Error() {
  return (
    <>
    <Header />
    <main>
      <h1>Oops, something went wrong!</h1>
      <p>
        Unfortunately, something went wrong on our end - we're working on fixing
        it!
      </p>
      <Link className="btn" to="/">
        Back To Safety!
      </Link>
    </main>
    </>
  );
}

export default Error;
