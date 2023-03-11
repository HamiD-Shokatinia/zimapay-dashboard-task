import NotFound from "pages/NotFound";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Mywallet = React.lazy(() => import("pages/Mywallet"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Mywallet />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/mywallet" element={<Mywallet />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
