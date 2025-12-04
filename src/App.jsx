import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

import { appConfig } from "./config/config.jsx";
// import Home from "./pages/Home";
import Models from "./pages/Models";
import Checklist from "./pages/Checklist";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        {/* <Route path={appConfig.routes.home} element={<Home />} /> */}
        <Route path={appConfig.routes.models} element={<Models />} />
        <Route path={appConfig.routes.checklist} element={<Checklist />} />
      </Routes>
    </BrowserRouter>
  );
}