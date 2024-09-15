import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { selectChartTypesTabs, selectSelectedChartTab, setSelectedChartTab } from '../../store/Visualization/ChartsTabSlice'
export default function ChartTypes() {
  const charts = useSelector(selectChartTypesTabs)
  const dispatch = useDispatch()
  const selectedChart = useSelector(selectSelectedChartTab)
  const handleOnClick = (name) => {
    dispatch(setSelectedChartTab(name))
  } 
  return (
    <>
      <div className='flex flex-col items-center'>
        <div className='mt-5'>
        {charts.map((chart) => {
          return <ChartTab onClick={handleOnClick} selectedChart={selectedChart} name={chart}/>
        })}
        </div>
      </div>
    </>
  )
}

const ChartTab = ({name,selectedChart, onClick}) => {
  const handleOnClick = () => {
    onClick(name)
  }
  return <>
    <div onClick={handleOnClick} className={`w-56 h-10 flex items-center rounded-md shadow-md cursor-pointer ${selectedChart === name ? 'bg-gray-700' : 'shadow-md'}`}>
      <h3 className={`${selectedChart === name ? 'text-white' : 'text-black'} ml-5`}>{name[0].toUpperCase() + name.slice(1,name.length)}</h3>
    </div>
  </>
}
