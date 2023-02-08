import React from 'react'
import { Link } from 'react-router-dom'
import { Stack, Typography } from "@mui/material"
import { logo } from "../utils/constance"
import { SearchBar } from "../allComponents"

const NavBar = () => {
  return (
    <Stack
        direction={"row"}
        alignItems="center"
        sx={{
            backgroundColor: "#000",
            justifyContent: "space-between",
            position: "sticky",
            top: 0,
            p: 2,
            overflowX: "auto"
        }}
    >
        <Link to={"/"} style={{display: "flex", alignItems: "center"}}>
            {/* <img src={logo} alt="logo" height={45}/> */}
            <Typography
            variant='h4'
              sx={{
                color: "crimson",
                ml: "5px",
                fontWeight: "bold"
              }}
            >
              <span style={{color: "#fff"}}>V</span>Tube
            </Typography>
        </Link>
        <SearchBar />
    </Stack>
  )

}

export default NavBar