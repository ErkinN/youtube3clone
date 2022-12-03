import React from "react";
import { Box, Stack } from "@mui/material";
import logo from "../Assets/youtube-logo.png";
import { colors } from "../../constants/colors";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={2}
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: colors.primary,
      }}
    >
      <Link to="/">
        <img src={logo} alt="" height={60} />
      </Link>
      <SearchBar />
      <Box />
    </Stack>
  );
};

export default Navbar;
