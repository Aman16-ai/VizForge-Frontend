import { Details } from "@mui/icons-material"
import { generateChartApi, getattributesWithTypeApi } from "./Api"

export const getattributesWithType = async(fileId) => {
    try {
        const url = getattributesWithTypeApi + fileId
        const response = await fetch(url)
        if(response.status === 200) {
            const data = await response.json()
            console.log('data',data)
            return {success:true,"data":data?.Response}
        }
        throw Error("Something went wrong")
    }
    catch(err) {
        return {success:false,Details:err.toString()}
    }
}

export const generateChartService = async(payload) => {
    try {
        const response = await fetch(generateChartApi,{
            method:"POST",
            headers : {
                'content-type':'application/json'
            },
            body:JSON.stringify(payload)
        })
        if(response.status === 201) {
            const data = await response.json()
            const options = data?.Response
            return {success:true,options:options}
        }
        throw new Error("Something went wrong")
    }
    catch(err) {
        return {success:false,Details:err.toString()}
    }
}