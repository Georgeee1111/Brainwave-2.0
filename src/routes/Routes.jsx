import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { homeRoutes } from "../routeConfig/RouteConfig";
import NotFound from "../components/generalComponents/NotFound";

const RoutesComponent = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        {homeRoutes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
        {/* Display not found page when the URL does not exist */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
