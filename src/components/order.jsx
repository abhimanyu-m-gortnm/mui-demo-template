import * as React from "react";
import { Card, CardContent, Typography, Chip } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info"; // or any other icon you want to use

export default function CustomCard() {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 1,
        borderRadius: 2,
        backgroundColor: "#E8ECED",
        mb: 1,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: 1,
          "&:last-child": {
            paddingBottom: 1,
          },
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{ color: "#000", fontWeight: "bold" }}
        >
          5325 - 00034
        </Typography>
        <Typography variant="body2" sx={{ color: "#000" }}>
          SAFETY EQUIPMENT - COMPULSORY SPARES
        </Typography>
        <Chip icon={<InfoIcon />} label="primary" color="primary" />
      </CardContent>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          padding: 1,
          "&:last-child": {
            paddingBottom: 1,
          },
        }}
      >
        <Chip
          label="AM"
          sx={{
            bgcolor: "red", 
            color: "white", 
            fontWeight: "bold",
            borderRadius: "50px", // Rounded corners for the chip
            marginRight: 2,
            height: "40px", // Adjust size as per your design
            fontSize: "0.70rem", // Adjust font size as per your design
          }}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            padding: 1,
            "&:last-child": {
              paddingBottom: 1,
            },
          }}
        >
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Consumables
          </Typography>
          <Typography variant="body2" sx={{ color: "#000" }}>
            04 Mar 2020
          </Typography>
        </CardContent>
      </CardContent>
    </Card>
  );
}
