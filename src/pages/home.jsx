import * as React from "react";
import Grid from "@mui/material/Grid";
import { Typography, Chip, Box } from "@mui/material";
import OrderCard from "../components/order";
export default function Home() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            paddingBottom: "4px",
            marginBottom: "16px",
          }}
        >
          <Typography variant="h6">ORDERS</Typography>
          <Chip
            label={8}
            sx={{
              backgroundColor: "#e0e0e0",
              color: "#757575",
            }}
          />
        </Box>
        {Array.from({ length: 8 }).map((e) => (
          <OrderCard key={e} />
        ))}
      </Grid>
      <Grid item xs={8}>
        hkhkhj
      </Grid>
    </Grid>
  );
}
