import React from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Card from "../components/card"
import database from "./database"


export default function App() {
    const cards = database.map(item => {
        return ( 
            <Card
            key={item.key}
            img={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
            openSpots={item.openSpots}
            />
        )
    })
    return (
        <div>
            <Navbar/>
            <Hero/>
            <section className="cards-list">
            {cards}
            </section>
        </div>
    )
}