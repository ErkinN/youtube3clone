import { useState, useEffect } from "react";
import { ApiService } from "../../Service/api.service";

import { Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { colors } from "../../constants/colors";
import Category from "../Category/Category";
import Videos from "../Videos/Videos";

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  const categoryChangeHandler = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(
          `search?part=snippet&q=${selectedCategory}`
        );
        setVideos(data.items);
        //console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData(getData);

    //ApiService.fetching("search").then((data) => setVideos(data));
  }, [selectedCategory]);

  return (
    <Stack>
      <Category
        categoryChangeHandler={categoryChangeHandler}
        selectedCategory={selectedCategory}
      />
      <Box p={2} sx={{ height: "90vh" }}>
        <Container maxWidth={"90vh"}>
          <Typography variant="h4" fontWeight={"bold"} mb={2}>
            {selectedCategory}{" "}
            <span style={{ color: colors.primary }}> videos</span>
          </Typography>
          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  );
};

export default Main;
