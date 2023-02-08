import { IconButton, Paper } from '@mui/material'
import { Search } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"
import { useState } from 'react'

const SearchBar = () => {

  const [ searchTerm, setSearchTerm ] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if(searchTerm) {
      navigate(`/search/${searchTerm}`)
    }

  }

  return (
    <Paper
      onSubmit={handleSubmit}
      component={"form"}
      sx={{
        borderRadius: "50px",
        pl: "10px",
        mr: {sx: "auto", sm: "10px"}
      }}
      className="paper"
    >
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className= "search-bar"
        placeholder='search...'
      />
      <IconButton
        sx={{
          color: "red",
          p: "5px"
        }}
      >
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar