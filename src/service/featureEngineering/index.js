import { PERFORM_AUTO_FE_API } from "../Api"


export const performAutoFeatureEngineerService = async(payload) => {

    const response = await fetch(PERFORM_AUTO_FE_API,{
        method : "POST",
        headers : {
            'content-type':"application/json"
        },
        body : JSON.stringify(payload)
    })

    if(response.status !== 200) {
        throw new Error("Something went wrong")
    }
    return 
}