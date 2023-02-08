import React, { useEffect, useState } from 'react'
import { Stack, Box, Typography } from "@mui/material"
import { SideBar, Videos } from "../allComponents"
import { fetchVideos } from "../utils/fetchVideos"


const Feed = () => {

const [ selectedCategory, setSelectedCategory] = useState("New")
const [videos, setVideos] = useState(null)

useEffect(() => {

  fetchVideos(`search?part=snippet&q=${selectedCategory}`)
  .then((data) => setVideos(data.items))
}, [selectedCategory])

  return (
    <Stack
      sx={{
        flexDirection: {sx: "column", sm: "row"}
      }}
    >
        <Box
          sx={{
            height: { sx: "auto", md: "92vh"},
            borderRight: "1px solid white",
            p: 2
          }}
        >
          <SideBar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            className="side-bar"
          />
          <Typography
            variant='body1'
            className='copyright'
          >
            copyright @ 2023
          </Typography>
        </Box>
        <Box
          p={2}
          sx={{
            height: "90Vh",
            overflowY: "auto",
            flex: 2,
            flexDirection: "column"
          }}
        >
          <Typography
            variant='h4'
            fontWeight= "Bold"
            mb={2}
            sx={{
              color: "white"
            }}
          >
            {selectedCategory} <span
              style={{
                color: "red"
              }}
            >Video</span>
          </Typography>
          <Videos
            videos={videos}
          />
        </Box>
    </Stack>
  )
}

export default Feed