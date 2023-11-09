import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Feed } from '../pages/feed/ui';
import { Profile } from '../pages/profile/ui';
import { Layout } from '../pages/layout/ui';
import { Explore } from '../pages/explore/ui';
import { Auth } from '../pages/auth/ui';
import { Reg } from '../pages/reg/ui';
import ProtectedRoutes from './ProtectedRoutes';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/reg" element={<Reg />} />
        {/* <Route path="/" element={<Layout />}> */}
        <Route path='/*' element={<ProtectedRoutes />} />
        {/* </Route> */}
      </Routes>
    </Router>
  );
};

export {App};
