import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Feed } from "../pages/feed/ui";
import { Profile } from "../pages/profile/ui";
import { Layout } from "../pages/layout/ui";
import { Explore } from "../pages/explore/ui";

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
        </Routes>
      </Router>
    </>
  );
};

export { App };