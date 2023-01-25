import "./axios.js"
import axios from "axios"

export const getDataList = async () =>{

    try {
        const {data: list } = await axios.get("/data")
        return list
    } catch (error) {
        console.log({error})
        return null
    }
    
}