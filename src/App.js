import React from 'react'
import { BrowserRouter, Routes,Route} from "react-router-dom"
import { Box } from "@mui/material"
import { Feed, VideoDetail, ChannelDetail, SearchFeed, NavBar } from "./allComponents"


const App = () => (
    <BrowserRouter>
      <Box
        sx={{
          backgroundColor: "#000",
          color: "#fff"
        }}
      >
        <NavBar />
        <Routes>
          <Route exact path="/"  element={<Feed />} />
          <Route path="/video/:videoID" element={<VideoDetail />} />
          <Route path="/channels/:channelID" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )

export default App