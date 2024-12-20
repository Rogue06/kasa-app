// src/router/Router.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route avec Layout pour englober les pages */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          {/* Route spéciale pour les pages inexistantes */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
