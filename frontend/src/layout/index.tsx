import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import SideBar from "../components/SideBar";
import { useAppSelector } from "../store/hooks";

const Layout = () => {
  const token = useAppSelector((store) => store.user.token);
  return (
    <Box>
      <Nav />

      <Box sx={{ display: "flex" }}>
        {token && <SideBar />}
        <Box sx={{ p: 2, width: "100%" }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
