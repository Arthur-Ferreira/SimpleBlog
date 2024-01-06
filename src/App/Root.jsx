import { Outlet } from "react-router-dom";

import Header from "../components/organisms/Header";

function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
export default Root;
