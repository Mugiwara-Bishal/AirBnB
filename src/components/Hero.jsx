import React from "react";
import photo from "../assets/images/photo-grid.png"

export default function Hero(){
    return(
        <section className="hero">
            <img src={photo} className="hero-photos"/>
            <h1 className="Hero-header">Online Experiences</h1>
            <p className="Hero-text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}