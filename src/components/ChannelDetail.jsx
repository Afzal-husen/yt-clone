import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchVideos } from "../utils/fetchVideos"
import { Box } from "@mui/material"
import { ChannelCard, Videos } from "../allComponents"



const ChannelDetail = () => {

  const { channelID } = useParams()
  const [ channel, setChannel ] = useState(null) 
  const [ videos, setVideos ] = useState([])

useEffect(() => {
  fetchVideos(`channels?part=snippet&id=${channelID}`)
  .then((data) => setChannel(data?.items[0]))

  fetchVideos(`search?part=snippet&channelId=${channelID}&order=date`)
  .then((data) => setVideos(data.items))

}, [channelID])


  return (
    <Box
      sx={{
        minHeight: "95vh",
        p: { xs: 0, md: 2},
        overflow: "hidden"
      }}
    >
      <Box>
        <div
          style={{
            background: "linear-gradient(90deg, rgba(194,121,244,1) 0%, rgba(253,29,29,1) 50%, rgba(255,222,177,1) 100%)",
            height: "300px"
          }}
        />
        <ChannelCard channelDetail={ channel} marginTop={"-110px"} />
      </Box>

      <Box
        sx={{
          display: 'flex'
        }}
      >
        <Box
          sx={{
            mr: {sm: "100px"}
          }}
        />
          <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail