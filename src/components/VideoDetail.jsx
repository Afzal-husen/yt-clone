import { Box, Stack, Typography } from "@mui/material"
import ReactPlayer from "react-player"
import { useParams, Link } from "react-router-dom"
import { fetchVideos } from "../utils/fetchVideos"
import { useEffect, useState } from "react"
import { CheckCircle } from "@mui/icons-material"
import { Videos } from "../allComponents" 

const VideoDetail = () => {

  const { videoID } = useParams()
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)

  useEffect(() => {
    fetchVideos(`videos?part=snippet,statistics&id=${videoID}`)
    .then((data) => setVideoDetail(data.items[0]))

    fetchVideos(`search?part=snippet&relatedToVideoId=${videoID}&type=video`)
    .then((data) => setVideos(data.items))

  }, [videoID])

  if(!videoDetail?.snippet) return "Loading..."


  const { snippet: {title, channelId, channelTitle}, statistics: {viewCount, likeCount}} = videoDetail

  return (
    <Box minHeight="95vh">
      <Stack direction={{xs: "column", md: "row"}}>
        <Box flex={1}>
          <Box sx={{width: "100%", position: "sticky",   top: "86px"}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${videoID}`} 
              className="react-player" controls
            />
            <Typography
              variant="h5"
              color="#FFF"
              fontWeight={"bold"}
              p={2}
            >
              {title}
            </Typography>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              pr={2}
            >
              <Link to={`/channels/${channelId}`}>
                <Typography
                 variant= {{sm: "subtitle1", md: "h6"}}
                  color="#fff"
                  px={2}
                  py={1}
                 >
                  {channelTitle}
                  <CheckCircle
                    sx={{
                      fontSize: "12px",
                      color: "gray",
                      ml: "5px"
                    }}
                  />
                </Typography>
              </Link>
              <Stack
                direction={"row"}
                gap={"20px"}
                alignItems={"center"}
              >
                  <Typography variant="body1" sx={{
                    opacity: 0.7,
                    color: "#fff"
                    }}>
                    {parseInt(viewCount).toLocaleString()} views
                  </Typography>
                  <Typography variant="body1" sx={{
                    opacity: 0.7,
                    color: "#fff"
                    }}>
                    {parseInt(likeCount).toLocaleString()} likes
                  </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center">
          <Videos videos={videos} direction={"column"}/>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail