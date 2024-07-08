import React, { useEffect, useState } from 'react'
import PreviewTable from './PreviewTable'
import { useLocation, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

// file_path : "http://localhost:5000/uploads/excel-files/1715310467058crop_production.xlsx",
export default function EDAPage() {
    const [metaData,setMetaData] = useState({})
    const [attribute,setAttributes] = useState([])
    const {fileId} = useParams()
    const {state} = useLocation()
    console.log('path --------> ',state)
    function cleanUrl(url) {
        // Use the URL constructor to parse the URL
        let parsedUrl = new URL(url);
        
        // Replace all backslashes with forward slashes in the pathname
        parsedUrl.pathname = parsedUrl.pathname.replace(/\\/g, '/');
        
        // Return the cleaned URL as a string
        return parsedUrl.toString();
    }
    const navigate = useNavigate()
    const fetchMetaData = async() => {
        try {
            const payload = {
                file_path : cleanUrl("http://localhost:5000/"+state.filePath),
                prompt : "meta data"
            }
            const url = "http://127.0.0.1:8000/fetchFileMetaData/"
            const response = await fetch(url,{
                method:"POST",
                headers: {
                    'content-type':'application/json'
                },
                body:JSON.stringify(payload)
            })
            const data = await response.json()
            const obj = data?.message.head[0]
            const attributes = Object.keys(obj)
            console.log(attributes)
            setAttributes(attributes)
            setMetaData({...data?.message})
        }
        catch(err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchMetaData()
    },[])
    useEffect(() => {
        console.log(metaData)
    },[metaData])
    const handleClick = () => {
        navigate("/dashboard/vizulisation/" + fileId)
    }
  return (
    <div>
        {
            ('head' in metaData) ? <div className='flex flex-col'>
                <div className='w-full bg-white p-2 items-center flex justify-between mb-2'>
                <h3 className='font-bold'>Dataset Preview</h3>
                <button className='bg-gray-700 text-white p-2 rounded-md' onClick={handleClick}>Visulization</button>
                </div>
                <PreviewTable attributes={attribute} data={metaData?.head}/>
                <div className='w-full flex flex-col justify-center h-auto p-2 shadow-md mt-5 bg-white'>
                    <h4><span className='font-bold'>Rows</span> and <span className='font-bold'>Columns</span> : {metaData?.shape[0]}, {metaData?.shape[1]}</h4>
                    <hr />
                    <h2 className='mt-7 font-bold text-l'>Null values</h2>
                    <hr />
                <div className='w-full flex flex-col'>
                    {metaData?.totalNAvalues.map((t,i) => {
                        return <div className='flex w-[200px] justify-between'>
                            <h4 className='font-semibold'>{attribute[i]}</h4>
                            <h4>{t}</h4>
                        </div>
                    })}
                </div>
                </div>
            </div> : "Loading"
        }

    </div>
  )
}
