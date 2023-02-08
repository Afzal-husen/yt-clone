import React, { useEffect, useState } from 'react'
import { Box, Typography } from "@mui/material"
import {  Videos } from "../allComponents"
import { fetchVideos } from "../utils/fetchVideos"
import { useParams } from 'react-router-dom'


const SearchFeed = () => {

const [videos, setVideos] = useState(null)
const { searchTerm } = useParams()

useEffect(() => {
  fetchVideos(`search?part=snippet&q=${searchTerm}`)
  .then((data) => setVideos(data.items))
}, [searchTerm])

  return (
    <Box
    p={2}
    sx={{
      height: "90Vh",
      overflowY: "auto",
      flex: 2,
      flexDirection: "column",
      ml: {sm: "100px"}
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
        search results for <span
          style={{
            color: "red"
          }}
        >{searchTerm}</span>
      </Typography>
      <Videos
        videos={videos}
      />
  </Box>
  )
}

export default SearchFeed