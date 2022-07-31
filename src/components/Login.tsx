import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuthContext } from "../providers/context";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";

const theme = createTheme();

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const useAuth = useAuthContext();

  const handleLogin = (e: any) => {
    console.log("Login called");
    useAuth.login(user, password);
    navigate("/", { replace: true });
  };

  return (
    <ThemeProvider theme={theme}>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      </Box>
    </ThemeProvider>
    //   <div>
    //     <label>
    //       UserName:
    //       <input type="text" onChange={(e) => setUser(e.target.value)}></input>
    //       <input
    //         type="password"
    //         onChange={(e) => setPassword(e.target.value)}
    //       ></input>
    //     </label>
    //     <button onClick={handleLogin}>Login</button>
    //   </div>
  );
};

export default Login;
