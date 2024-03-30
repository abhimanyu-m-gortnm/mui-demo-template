import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";

export default function TopBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "white", color: "black" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "black" }}
          >
            Procurement
          </Typography>
          <IconButton size="large" aria-label="search" color="inherit">
            <SearchIcon sx={{ color: "black" }} />
          </IconButton>
          <IconButton size="large" aria-label="notifications" color="inherit">
            <NotificationsIcon sx={{ color: "black" }} />
          </IconButton>
          <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
            <MoreVertIcon sx={{ color: "black" }} />
          </IconButton>
          <Avatar alt="Daniel Rogers" src="/path/to/your/image.jpg" />{" "}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
