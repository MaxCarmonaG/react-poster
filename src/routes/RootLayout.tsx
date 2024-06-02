import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";

const RootLayout = () => {
  return (
    <>
      <MainHeader onCreatePost={() => { }} />
      <Outlet />
    </>
  );
};

export default RootLayout;
