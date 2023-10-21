import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Feed } from "../pages/feed/ui";
import { Profile } from "../pages/profile/ui";
import { Layout } from "../pages/layout/ui";
import { Explore } from "../pages/explore/ui";
import { Auth } from "../pages/auth/ui";
import { Reg } from "../pages/reg/ui";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Feed />} />
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/explore" element={<Explore/>}/>
          </Route>
          <Route path="/auth" element={<Auth />} />
          <Route path="/reg" element={<Reg />} />
        </Routes>
      </Router>
    </>
  );
};

export { App };