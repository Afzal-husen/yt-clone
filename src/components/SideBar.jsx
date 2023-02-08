import { Stack } from "@mui/material"
import { categories } from "../utils/constance"

const SideBar = ({selectedCategory, setSelectedCategory}) => {

  return (
    <Stack
        sx={{
            height: { sx: "auto", md: "95%"},
            flexDirection: { xs: "row", sm: "row", md: "column"},
        overflowY: "auto"
        }}
    >
        {categories.map((category) => (
            <button
                className = "category-btn"
                style={{
                    backgroundColor: category.name === selectedCategory && "red",
                    opacity: category.name === selectedCategory ? 1 : 0.8
                }}
                onClick={() => setSelectedCategory(category.name)}
                key={category.name}
            >
                <span
                    style={{
                        color: category.name === selectedCategory ? "white" : "#FC1503",
                        marginRight: "15px"
                    }}
                >{category.icon}</span>
                <span
                    style={{
                        color: "white"
                    }}
                >{category.name}</span>
            </button>
        ))}
    </Stack>
  )
}

export default SideBar