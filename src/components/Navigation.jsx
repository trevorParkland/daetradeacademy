import { Link as RouterLink } from "react-router-dom";
import { appConfig } from "../config/config.jsx";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

export default function Navigation() {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo / App Name */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textTransform: "uppercase" }}>
          daetrades
        </Typography>

        {/* Navigation Buttons */}
        <Box>
          <Button
            color="inherit"
            component={RouterLink}
            to={appConfig.routes.home}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to={appConfig.routes.models}
          >
            Models
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to={appConfig.routes.checklist}
          >
            Checklist
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to={appConfig.routes.priceaction}
          >
            Price Action
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to={appConfig.routes.bonds}
          >
            Analysis
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}