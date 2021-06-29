import React from 'react'
import "../App.css"
import { useHistory } from 'react-router'


export default function FinalPage() {
   const history = useHistory()
    return (
        <div className = "final-page">
            <h2>Parcel order submitted. Relax as we deliver your parcel</h2>
            <p>Do you want to send another item?</p>
            <button className="auth-btn final-btn" onClick={()=>history.push("/parcelform")}>Create Order</button>
            <button className="auth-btn" onClick={()=>history.push("/allparcels")}>View all orders</button>

        </div>
    )
}
