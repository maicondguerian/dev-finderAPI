import { useContext } from "react"
import { MyContext } from "../context/MyContext/MyContext"

export const CallApi  = () =>{
    const { userName } = useContext(MyContext)
    fetch(`https://api.github.com/users/${userName}`)
    .then((response)=> response.json())
    .then((data)=> console.log(data))
    .catch((err)=> console.log(err))
    return(
        <>
        </>
    )
}