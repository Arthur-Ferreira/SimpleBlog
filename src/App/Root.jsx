import { Outlet } from "react-router-dom";

import Header from "../components/organisms/Header";

function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
export default RootLayout;
