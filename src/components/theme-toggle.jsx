/* eslint-disable react/prop-types */
import "@theme-toggles/react/css/Classic.css"
import { Classic } from "@theme-toggles/react"


export default function ThemeToggle({ isToggled, setToggle}) {


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
    toggled={isToggled}
    style={{ 
    color: isToggled ? "#b54400" : "#C2410C",
    fontSize: "40px",
    }}
    className="cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
    onToggle={() => {
      setToggle(!isToggled)
      toggleTheme()
    }}
    />
  )
}