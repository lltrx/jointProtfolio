import "@theme-toggles/react/css/Classic.css"
import { Classic } from "@theme-toggles/react"
import { useState } from "react"

export default function ThemeToggle() {
  const [isToggled, setToggle] = useState(false)

  const toggleTheme = () => {
    if (isToggled) {
      document.documentElement.classList.remove("dark")
    } else {
      document.documentElement.classList.add("dark")
    }
  }


  return (
    <Classic duration={750}
    value={200}
    color="#f1c40f"
    toggled={isToggled}
    style={{ 
    color: "#fff",
    fontSize: "40px",
     }}
    onToggle={() => {
      setToggle(!isToggled)
      toggleTheme()
    }}
    />
  )
}