import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import { GlobalStyles } from "@mui/material";
import { appConfig } from "./config/config.jsx";
import Models from "./pages/Models";
import Checklist from "./pages/Checklist";
import PriceAction from "./pages/pa/PriceAction.jsx";
import DrawOnLiquidityTab from "./pages/ChecklistTabs/DrawOnLiquidity";
import Orderflow from "./pages/ChecklistTabs/Orderflow";
import Notes from "./pages/ChecklistTabs/Notes";
import Bonds from "./pages/analysis/Bonds";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles
        styles={{
          body: {
            margin: 0,
            padding: 0,
            backgroundColor: "#f5f5f5",
            fontFamily: "Inter, Arial, sans-serif",
          },
          h1: { fontWeight: "bold" }
        }}
      />

      <Navigation />

      <Routes>
        <Route path={appConfig.routes.models} element={<Models />} />
        <Route path={appConfig.routes.checklist} element={<Checklist />} >
          <Route path={appConfig.routes.dol} element={<DrawOnLiquidityTab />} />
          <Route path={appConfig.routes.orderflow} element={<Orderflow />} />
          <Route path={appConfig.routes.notes} element={<Notes />} />
        </Route>
        {/* <Route path={appConfig.routes.scalping} element={<Scalping />} /> */}
        <Route path={appConfig.routes.priceaction} element={<PriceAction />} />
        <Route path={appConfig.routes.bonds} element={<Bonds />} />
      </Routes>
    </BrowserRouter>
  );
}