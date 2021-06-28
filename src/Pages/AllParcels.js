import React, {useState, useEffect} from 'react';

import "../App.css"

import ParcelCard from '../Components/ParcelCard';
import "../Components/Main.css"

export default function AllParcels() {
    const [data, setData] = useState([])
    
    useEffect(() => {
      fetch("https://sefcourier.herokuapp.com/api/v1/parcels")
        .then(res=>{
          return res.json();
        })
        .then(result => {
          setData(result)
          
        })
      
    }, []) 

    return (
        <div className="all-parcels">
          
          {/* <Button onClick={fetchData}>Get all parcels</Button> */}
                        
          <div className="book">
            {data.map(parcel=>{
              return(<ParcelCard key={parcel._id} name={parcel.parcelname} destination={parcel.destination} currentLocation={parcel.userLocation} status={parcel.status} />)
            })}
            {console.log(data)}
          </div>
         
            
        </div>
    )
}
