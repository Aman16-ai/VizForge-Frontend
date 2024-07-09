import React, { useState } from 'react'
import ReactEChart from 'echarts-for-react'
import { useSelector } from 'react-redux'
import { selectChartOptions } from '../../store/Visualization/ChartSlice'
export default function ChartCanvas() {
    const options = useSelector(selectChartOptions)
    // const [option,setOptions] = useState({ xAxis: {
    //     type: 'category',
    //     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','Ho',"NO"],
    //   },
    //   yAxis: {
    //     type: 'value'
    //   },
    //   series: [
    //     {
    //       data: [120, 200, 700, 80, 170, 110, 130,400,500],
    //       type: 'bar',
    //       showBackground: true,
    //       backgroundStyle: {
    //         color: 'rgba(180, 180, 180, 0.2)'
    //       },
    //       itemStyle: {normal: {color: 'rgb(55 65 81 / 1)'}},
    //     }
    //   ]})
  return (
    <>
        {options?<ReactEChart style={{height:"100%"}} option={options}/>:null}
    </>
  )
}
