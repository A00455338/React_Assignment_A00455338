import React, { useEffect, useState } from 'react';
import img from "./chd.jpg";
import cold from "./cold.png";
import mild from "./mild.png";
import sunny from "./sunny.png";
import "./myTown.css";
export const MyTown = () =>{
    const [temp,setTemp]=useState();
    const [Deg,setDeg]=useState('C');
    const [tempValC,setTempValC]=useState();
    const [tempValF,setTempValF]=useState();
    const [imgSrc,setSrc]=useState("");
    useEffect(()=>{
       fetch("https://api.openweathermap.org/data/2.5/weather?q=chandigarh&appid=155e236acd1fca03c8e571d76b22cc56&units=metric")
        .then(res=>{
            return res.json();
        })
        .then(text=>{
            setTempValC(text.main.temp.toFixed(2))
            const val=((tempValC*9/5)+32).toFixed(2);
            setTempValF(val)
            setTemp(tempValC)
        })
        .catch(err=>{
            console.log(err)
        })
        if(tempValC<10.00)
        {
            setSrc(cold);
        }
        else if(tempValC>10 && tempValC<20)
        {
            setSrc(mild);
        }
        else
        {
            setSrc(sunny);
        }
        
    },[tempValC])


    function changeTemp(value){
        if(value=='c')
        {
            setTemp(tempValC);
            setDeg('C')
        }
        else 
        {
            setTemp(tempValF)
            setDeg('F')
        }
    }
   
   
   
    return(
        <div className="Section">
            <h1 className="chdText">Chandigarh</h1>
            <img src={img} className="townImg"/>
            <div className="text">
            <p>Chandigarh, the capital of the northern Indian states of Punjab and Haryana, 
                was designed by the Swiss-French modernist architect, Le Corbusier. His buildings include the 
                Capitol Complex with its High Court, Secretariat and Legislative Assembly, as well as the giant Open Hand Monument.</p>
                <img className="tempImg" src={imgSrc}/>
                <span className="temp"> {temp} {Deg}</span>
            <span className="deg" onClick={()=>changeTemp('c')}>&#8451;</span>
            <span className="deg" onClick={()=>changeTemp('f')}>&#8457;</span>
                </div>
                
        </div>
    )
}