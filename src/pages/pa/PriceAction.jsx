import { Box, Typography, List, ListItem, ListItemText, Divider } from "@mui/material";

import abcd from "../../assets/priceaction/abcd.png"

export default function PriceAction() {
  const magnetsIntroList = [
    <>
      <strong>Chapter 7: Price Magnets</strong>
    </>,
    <>
      AB=CD is the same as leg 1 = leg 2 move. The first move is AB, the second mover is CD.
    </>,
    <>
      These are ways to stay with the trend. Counter trend trading avoid until at least the measured move is met.
      <img src={abcd} alt="abcd" />
    </>,
    <>
      When the market trends in one direction, it will have pior failed reversals recongnized as trend pullbacks. When the market finally reverses the trend, the prior failed reversals become targets.
    </>
  ];
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold", textTransform: "uppercase"}}>
          Price Magnets
      </Typography>
     
      <List sx={{ pl: 6, listStyleType: "circle" }}>
          {magnetsIntroList.map((text, index) => (
            <ListItem key={index} sx={{ display: "list-item" }}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
    </Box>
  )
}