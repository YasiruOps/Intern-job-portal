import React, { useState, useEffect } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

export default function Graph() {
    const id = useSelector((state) => state.auth.employerid);
    const [data, setData] = useState([])

    useEffect(() => {

        const values = {}
        const temp =[]
        let maxval = 0

        axios
          .get(`http://localhost:8000/application/${id}`)
          .then((res) => {
            const data = res.data;
            data.forEach(item => {
                if(values[item.offerTitle]){
                    values[item.offerTitle] += 1 
                }
                else{
                    values[item.offerTitle] = 1
                }

            })
            // setData(values);
            console.log("values", values);
            let maxvalue = 0;
            
            
            for (const key in values) {
                console.log("for runs")
                const jobs = values[key]

                if(jobs>maxvalue){
                    maxvalue = jobs
                }
                
              }
              for (const key in values) {
                const jobs = values[key]
                temp.push({name:key, Applications:jobs, count:maxvalue})
              }
              setData(temp)
              console.log("temp", temp)
          })
          .catch((err) => {
            alert(err.message);
          });
      }, []);   




    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="count"/>
          <Tooltip />
          <Legend />
          <Bar dataKey="Applications" fill="#8884d8" />
          
        </BarChart>
      </ResponsiveContainer>
    );
  }
