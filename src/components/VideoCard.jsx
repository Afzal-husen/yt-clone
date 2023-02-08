import { Card, CardMedia, CardContent, Typography } from "@mui/material"
import { Link } from "react-router-dom"

import { demoChannelTitle, demoVideoTitle, demoVideoUrl } from "../utils/constance"
import { CheckCircle } from "@mui/icons-material"

const VideoCard = ({video: {id: {videoId}, snippet}}) => {
  return (
    <Card
        sx={{
            width: { md: "320px", xs: "100%", sm: "358px"},
            boxShadow: "none",
            borderRadius: 0
        }}
    >
        <Link
            to={ videoId ? `/video/${videoId}` : demoVideoUrl}
        >
            <CardMedia
                image={snippet?.thumbnails?.high?.url}
                alt={snippet?.title}
                sx={{
                    width: {md: "358px", xm: "100%"},
                    height: 180
                }}
            />
        </Link>
        
        <CardContent
            sx={{
                backgroundColor: "#1e1e1e",
                height: 108
            }}
        >
            <Link
                to={videoId ? `/video/${videoId}` : demoVideoUrl}
            >
                <Typography
                    variant= "subtitle1"
                    fontWeight={"bold"}
                    sx={{
                        color: "#fff"
                    }}
                >
                    {snippet?.title.slice(0, 60) || demoVideoTitle}
                </Typography
                    
                >
            </Link>
            <Link
                to={snippet?.channeId ? `/channel/${snippet?.channelId}` : demoChannelTitle}
            >
                <Typography
                    variant= "subtitle2"
                    fontWeight={"bold"}
                    sx={{
                        color: "gray"
                    }}
                >
                    {snippet?.channelTitle || demoChannelTitle}
                    <CheckCircle
                        sx={{
                            fontSize: "12px",
                            ml: "5px"
                        }}
                    />
                </Typography>
            </Link>
        </CardContent>
      
    </Card>
  )
}

export default VideoCard