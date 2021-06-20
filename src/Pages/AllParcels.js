import { Button } from '@material-ui/core'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ParcelCard from '../Components/ParcelCard';
import "../Components/Main.css"

export default function AllParcels() {
    const [data, setData] = useState([])
    
   
    const fetchData=()=>{
        axios.get("https://sefcourier.herokuapp.com/api/v1/parcels")
        .then(result=> {
            setData(result.data)
            console.log(result)
        })
        .catch(err=>console.log(err))
    }
        
        

    return (
        <div className="all-parcels">
          
          <Button onClick={fetchData}>Get all parcels</Button>
                        
          <div className="book">
            {data.map(parcel=>{
              return(<ParcelCard key={parcel._id} name={parcel.name} destination={parcel.destination} currentLocation={parcel.currentLocation} image="https://images-na.ssl-images-amazon.com/images/I/51QyOJtK0xS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"/>)
            })}
          </div>
         
            
        </div>
    )
}
