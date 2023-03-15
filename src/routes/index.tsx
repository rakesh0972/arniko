import { Routes, Route } from "react-router-dom";

import Dashboard from "../layouts/Dashboard.layout";

const MainRoute = () => {
  return (
    <Routes>
      <Route path={""} element={<Dashboard />} />
    </Routes>
  );
};

export default MainRoute;
