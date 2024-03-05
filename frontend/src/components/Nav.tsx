import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { setToken } from "../store/slices/userSlice";

const Nav = () => {
  const token = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FoodiePOS
          </Typography>
          {token ? (
            <Button
              color="inherit"
              onClick={() => {
                localStorage.removeItem("accessToken");
                dispatch(setToken(null));

                navigate("/login");
              }}
            >
              Log Out
            </Button>
          ) : (
            <Box>
              <Link to={"/login"}>
                <Button sx={{ color: "white" }}>Login</Button>
              </Link>
              <Link to={"/register"}>
                <Button sx={{ color: "white" }}>Register</Button>
              </Link>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
