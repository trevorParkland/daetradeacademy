import { Tabs, Tab, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

export default function ChecklistTabs() {
  const location = useLocation();

  // Map URLs to tab index
  const tabValue = (() => {
    if (location.pathname.includes("/checklist/dol")) return 0;
    if (location.pathname.includes("/checklist/notes")) return 1;
    // if (location.pathname.includes("/checklist/notes")) return 2;
    return false; // no tab active
  })();

  return (
    <Box sx={{ width: "100%", mt: 3 }}>
      <Tabs
        value={tabValue}
        centered
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab label="Draw on liquidity" component={Link} to="/checklist/dol" />
        <Tab label="Orderflow" component={Link} to="/checklist/orderflow" />
        <Tab label="Notes" component={Link} to="/checklist/notes" />
      </Tabs>
    </Box>
  );
}