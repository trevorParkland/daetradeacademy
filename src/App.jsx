import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

import { appConfig } from "./config/config.jsx";
// import Home from "./pages/Home";
import Models from "./pages/Models";
import Checklist from "./pages/Checklist";
import DrawOnLiquidityTab from "./pages/ChecklistTabs/DrawOnLiquidity";
import Orderflow from "./pages/ChecklistTabs/Orderflow";
import Notes from "./pages/ChecklistTabs/Notes";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        {/* <Route path={appConfig.routes.home} element={<Home />} /> */}
        <Route path={appConfig.routes.models} element={<Models />} />
        <Route path={appConfig.routes.checklist} element={<Checklist />} >
          <Route path={appConfig.routes.dol} element={<DrawOnLiquidityTab />} />
          <Route path={appConfig.routes.orderflow} element={<Orderflow />} />
          <Route path={appConfig.routes.notes} element={<Notes />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}