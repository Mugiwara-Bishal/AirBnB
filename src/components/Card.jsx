
import React from "react"
import star from "../assets/images/star.png"
import katiezaferes from "../assets/images/katiezaferes.png"


export default function Card(props) {
    console.log(new URL(`/images/${props.img}`, import.meta.url).href)
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
      
    return (
        <>
         <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={`images/${props.img}`} className="card-image" />
            <div className="card-stats">
                <img src={star} className="card-star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card-title">{props.item.title}</p>
            <p className="card-price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
        </>
       
    )
}