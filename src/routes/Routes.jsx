import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { homeRoutes } from "../routeConfig/RouteConfig";
import NotFound from "../components/generalComponents/NotFound";

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        {homeRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        {/* Display not found page when the URL does not exist */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
