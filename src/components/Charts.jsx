import React,{useState,useEffect} from "react"
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';
export default function Charts(){
  const [data,setData]=useState([])
 async function fetch_data(){
   let data= await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
   let parsedData=await data.json()
   let cases=parsedData.cases
   let x=Object.entries(cases)
   let filtered=x.map((ele)=>{
     return {date:ele[0],cases:ele[1]}
   })
   console.log(filtered)
   setData(filtered)
 }
  useEffect(()=>{
    fetch_data()
  },[])
  return(
    <div className="box">
       <h2 className="text-heading text-info" style={{textAlign:"center"}}>
                Number of Covid cases per day report</h2>
            <ResponsiveContainer className="inner" width="90%" aspect={3}>
                <LineChart data={data}  margin={{ left:90 }}>
                    <CartesianGrid/>
                    <XAxis dataKey="date"
                      stroke="navy"
                        interval={'preserveStartEnd'} />
                    <YAxis dataKey="cases" stroke="navy"></YAxis>
                    <Legend />
                    <Tooltip />
                    <Line dataKey="cases"
                        stroke="turquoise" activeDot={{ r: 8}} />
                </LineChart>
            </ResponsiveContainer>
    </div>
  )
}