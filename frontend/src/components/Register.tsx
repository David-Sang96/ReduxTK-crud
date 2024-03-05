import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { registerUser } from "../store/slices/userSlice";
import { User } from "../types/user";
import Nav from "./Nav";

const Register = () => {
  const [newUser, setNewUser] = useState<User>({ email: "", password: "" });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = () => {
    dispatch(
      registerUser({
        ...newUser,
        onSuccess: () => {
          navigate("/login");
        },
      })
    );
  };

  return (
    <>
      <Nav />
      <Box sx={{ width: "300px", margin: "auto", mt: 2 }}>
        <TextField
          label="Email"
          sx={{ width: "100%" }}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <TextField
          label="Password"
          sx={{ width: "100%", mt: 2 }}
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        />
        <Box sx={{ textAlign: "center ", mt: 2 }}>
          <Button
            variant="contained"
            onClick={handleRegister}
            disabled={newUser.email === "" || newUser.password === ""}
          >
            Register
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Register;
