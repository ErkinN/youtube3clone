import { Box, Stack } from "@mui/material";
import React from "react";
import VideoCard from "../VideoCard/VideoCard";
import ChannelCard from "../ChannelCard/ChannelCard";
import Loader from "../Loader/Loader";

const Videos = ({ videos }) => {
  if (!videos.length) return <Loader />;
  return (
    <Stack
      direction="row"
      flexWrap={"wrap"}
      justifyContent="center"
      alignItems="center"
      gap={2}
      spacing={{ sm: 2 }}
    >
      {videos.map((item) => (
        <Box key={item.id.videoId}>
          {item.id.videoId && <VideoCard videos={item} />}
          {item.id.ChannelId && <ChannelCard videos={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
