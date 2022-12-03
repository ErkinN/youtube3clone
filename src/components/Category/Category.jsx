import React from "react";
import { category } from "../../constants";

import { Stack } from "@mui/material";
import { colors } from "../../constants/colors";

const Category = ({ categoryChangeHandler, selectedCategory }) => {
  return (
    <Stack
      display={"flex"}
      justifyContent="center"
      direction={"row"}
      sx={{ overflowX: "scroll" }}
    >
      {" "}
      {category.map((item) => (
        <button
          key={item.name}
          className="category-btn"
          style={{
            borderRadius: "0",
            background: item.name === selectedCategory && colors.primary,
          }}
          onClick={() => categoryChangeHandler(item.name)}
        >
          <span style={{ color: colors.secondary, marginRight: "15px" }}>
            {item.icon}
          </span>
          <span style={{ opacity: "1" }}>{item.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Category;
