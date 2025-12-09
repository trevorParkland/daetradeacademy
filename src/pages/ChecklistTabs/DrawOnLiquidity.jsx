import { Box, Typography, List, ListItem, ListItemText, Divider } from "@mui/material";

export default function DrawOnLiquidity() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold", textTransform: "uppercase"}}>
        Draw On Liquidity
      </Typography>

      <List sx={{ pl: 2, listStyleType: "disc"}}>
        <ListItem disablePadding sx={{ display: "list-item" }}>
          <ListItemText primary="Equal high/lows ****" />
        </ListItem>

        <ListItem disablePadding sx={{ display: "list-item" }}>
          <ListItemText primary="Swing high/lows (15min +) ****" />
        </ListItem>
        <ListItem disablePadding sx={{ display: "list-item" }}>
          <ListItemText primary="Session high/lows ***" />
        </ListItem>

        <ListItem disablePadding sx={{ display: "list-item" }}>
          <ListItemText primary="Order blocks (Unmitigated) ***" />
        </ListItem>
        <ListItem disablePadding sx={{ display: "list-item" }}>
          <ListItemText primary="Fair value gaps **" />
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />
      
    </Box>
  )
}