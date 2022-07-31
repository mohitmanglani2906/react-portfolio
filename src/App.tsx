import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import RequireAuth from "./utils/RequireAuth";
import Layout from "./containers/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />}></Route>
      {/* <Route path="login" element={<Login />}></Route> */}
      <Route element={<RequireAuth />}>
        <Route path="/*" element={<Layout />}>
          {/* <Route path="profile" element={<Profile />}></Route> */}
        </Route>
        {/* <Route path="profile" element={<Profile />}></Route> */}
      </Route>
    </Routes>

    // <div className="App">
    //   <h1>Hello Mohit Manglani</h1>
    // </div>
  );
}

export default App;
