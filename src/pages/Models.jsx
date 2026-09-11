import { Box, Typography, List, ListItem, ListItemText, Divider } from "@mui/material";

import mmbm from "../assets/models/the-ICT-Market-Maker-Model.jpg"

export default function Models() {
  const marketMakerList = [
    <>
      <strong>Original Consolidation:</strong> Initial sideways action, engineering BSL and SSL creating stop orders on both sides
    </>,
    <>
      <strong>Distribution:</strong> Smart money distribute their positions, selling to retail traders who are entering late, driven by the momentum of the uptrend
    </>,
    <>
      <strong>Smart Money Reversal (SMR):</strong> Institutions reverse potions. Rebalance old imbalances (such as BS imbalance and sell side inefficiency), and conduction Sell-Side Liquidity Raids.
    </>,
    <>
      <strong>Buy Program:</strong> Accumulation (1st leg): Here, buy orders begin to exceed sell orders, indicating the start of a new bullish phase.
    </>,
    <>
      - Re-Accumulation (2nd leg): The dominance of buy orders continues, reinforcing the uptrend.
    </>,
    <>
      - Terminus: This is the final stage where institutions add their last orders to their positions, preparing for the next cycle of distribution.
    </>
  ];
  const marketMakerSellList = [
    <>
      <strong>Identify HTF IOF as bearish:</strong> Analyze higher time frame (HTF) direction
    </>,
    <>
      <strong>Recognize DOL as lower: Liquidity direction is a key indicator of where the market is likely to move next.</strong> Identify concentrated liquidity
    </>,
     <>
      <strong>Observe an initial curve representing a Buy Program with Accumulation/Re-Accumulation:</strong> This is the early indication that institutions are beginning to accumulate their short positions, leading to a temporary uptrend before the market resumes its downward trajectory.
    </>,
    <>
      After identifying a Smart Money Reversal through a Market Structure Shift (MSS), traders can apply the same entry models as in the Buy Model.
    </>
  ]
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold", textTransform: "uppercase"}}>
          Market Maker Model
      </Typography>

       <img src={mmbm} alt="abcd" />

      <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold", textTransform: "uppercase"}}>
          Phases of the MMBM
      </Typography>

      <List sx={{ pl: 6, listStyleType: "decimal" }}>
        {marketMakerList.map((text, index) => (
          <ListItem key={index} sx={{ display: "list-item" }}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold", textTransform: "uppercase"}}>
          Sell Model
      </Typography>
      <List sx={{ pl: 6, listStyleType: "decimal" }}>
        {marketMakerSellList.map((text, index) => (
          <ListItem key={index} sx={{ display: "list-item" }}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}