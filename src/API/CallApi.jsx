import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext/ThemeContext"

export const CallApi  = () =>{
    const { userName } = useContext(ThemeContext)
    fetch(`https://api.github.com/users/${userName}`)
    .then((response)=> response.json())
    .then((data)=> console.log(data))
    .catch((err)=> console.log(err))
    return(
        <>
        </>
    )
}