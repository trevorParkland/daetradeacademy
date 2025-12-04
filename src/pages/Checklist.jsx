
import { Box, Typography, List, ListItem, ListItemText, Divider } from "@mui/material";

export default function Checklist() {
    const checklistItems = [
    "15m, 1H, 4H FVG",
    "Major orderblocks + breakerblocks",
    ];
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold", textTransform: "uppercase"}}>
        Morning Checklist
      </Typography>

      <List sx={{ pl: 2, listStyleType: "disc" }}>
        <ListItem disablePadding sx={{ display: "list-item" }}>
          <ListItemText primary="Mark higher timeframe liquidity zones" />
        </ListItem>
        {/* Nested list bulletpoints */}
        <List sx={{ pl: 6, listStyleType: "circle" }}>
          {checklistItems.map((text, index) => (
            <ListItem key={index} sx={{ display: "list-item" }}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <ListItem disablePadding sx={{ display: "list-item" }}>
          <ListItemText 
            primary={
              "Mark previous day high (PDH), previous day low (PDL). " +
              "Note premarket highs + lows as they are common areas for liquidity sweeps."
            } />
        </ListItem>

        <ListItem disablePadding sx={{ display: "list-item" }}>
          <ListItemText primary="Determine overall market direction/trend. Examine daily candles. Are we in a channel or consolidation?" />
        </ListItem>

        <ListItem disablePadding sx={{ display: "list-item" }}>
          <ListItemText primary="SPY/QQQ – are we in chop zone or trending channel" />
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      {/* Section: Daily Rules */}
      <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold", textTransform: "uppercase" }}>
        Daily Rules
      </Typography>

      <List sx={{ pl: 2 }}>
        <ListItem disablePadding>
          <ListItemText primary="Wait 15–30 mins if inside box" />
        </ListItem>

        <ListItem disablePadding>
          <ListItemText primary="Trade in direction of the trend or daily bias" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="Only trade a reversal if there is clear structure change. This includes ChoCH or MSS in the 15m or 1H timeframe. Take entry in 5m frame" />
        </ListItem>

        <ListItem disablePadding>
          <ListItemText primary="Check ORB breakout on 15m" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="Check for buyside/ sellside liquidity on the 1H or 4H timeframe" />
        </ListItem>
      </List>
      
      <Divider sx={{ my: 3 }} />
      {/* Consolidation Market section*/}
      <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold", textTransform: "uppercase" }}>
        Consolidation Market
      </Typography>
      <List sx={{ pl: 2 }}>
        <ListItem disablePadding>
          <ListItemText primary="Look for external high and low. Once price sweeps, and create a iFvg, take the trade to target the other internal low/high" />
        </ListItem>
      </List>
      <Divider sx={{ my: 3 }} />

      {/* ICT Concepts to remember section */}
      <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold", textTransform: "uppercase" }}>
        ICT Concepts to remember
      </Typography>
      <List sx={{ pl: 2 }}>
        <ListItem disablePadding>
          <ListItemText primary="Look for orderblocks where it hasn’t been swept yet. If a low as already be swept, price will likely break through" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="On bearish trend closure + swept the low, DO NOT LOOK FOR PREVIOUS DAY’S HIGH. Look for fvg entry on higher timeframe + buyside liquidity" />
        </ListItem>
      </List>
    </Box>
  );
}