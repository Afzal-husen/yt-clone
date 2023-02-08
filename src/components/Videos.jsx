import { Stack, Box } from "@mui/material"
import {VideoCard, ChannelCard } from "../allComponents"

const Videos = ({videos, direction}) => {
  if(!videos?.length) return "Loading..."
  return (
    <Stack
      direction={direction || "row"}
      flexWrap={"wrap"}
    >
      {videos?.map((item, idx) => {
        return <Box
          p={1}
          key={idx}
        >
          {item?.id.videoId && <VideoCard video={item}/>}
          {item?.id.channelId && <ChannelCard channelDetail={item}/>}
        </Box>
      })}
    </Stack>
  )
}

export default Videos