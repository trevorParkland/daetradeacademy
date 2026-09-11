import { Box, Typography, List, ListItem, ListItemText, Divider } from "@mui/material";

export default function Orderflow() {
  const orderflowList = [
    <>
      <strong>Aggressive buying</strong> but no follow through = trapped buyers – good indication
      market will go down to test the buyers
    </>,
    <>
      <strong>Passive vs. aggression:</strong> When passive buyers/sellers overtake aggressive
      buyers/sellers, steady trend with many bumps form, as aggressive buyers keep getting
      stopped out and passive buyers taking the liquidity to sell. <strong>August 7</strong> was good example.
    </>
  ];
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold", textTransform: "uppercase"}}>
          Orderflow
      </Typography>
     
      <List sx={{ pl: 6, listStyleType: "circle" }}>
          {orderflowList.map((text, index) => (
            <ListItem key={index} sx={{ display: "list-item" }}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
    </Box>
  )
}