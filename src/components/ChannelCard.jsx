import {Box, CardMedia, Typography} from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { demoChannelTitle,  demoProfilePicture } from "../utils/constance"


const ChannelCard = ({channelDetail, marginTop}) => {

  console.log(channelDetail)

  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: {md: "320px", xs: "356px"},
        height: "326px",
        margin: "auto",
        marginTop,
      }}
    >
      <Link
        to={
          `/channels/${channelDetail?.id?.channelId}`
        }
      >
        <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title || demoProfilePicture}
          sx={{
            width: 170,
            height: 170,
            borderRadius: "50%",
            mb: "15px"
          }}
        />
        <Typography
          variant={"h6"}
          fontWeight={"bold"}
          sx={{
            color: "#fff"
          }}
        >
          {channelDetail?.snippet?.title || demoChannelTitle}
        <CheckCircle 
          sx={{
            fontSize: "15px",
            color: "gray",
            ml: "5px"
          }}
        />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && <Typography
        variant={'subtitle2'}
        sx={{
          color: "gray",
          textAlign: "center"
        }}
        >
            {channelDetail?.statistics?.subscriberCount} subscribers
          </Typography>}
      </Link>
    </Box>
  )
}

export default ChannelCard