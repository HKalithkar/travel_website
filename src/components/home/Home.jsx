import React from 'react'
import Image from './homeComps/Image'
import "./Home.css"

export default function Home() {
  return (
    <div id='home' >
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <Image link="/india.jpg" alt="India" classes="carousel-item active"/>
                <Image link="/goa.jpg" alt="Goa" classes="carousel-item" />
                <Image link="/kerala.jpg" alt="Kerala" classes="carousel-item" />
                <Image link="/taj-mahal.jpg" alt="Taj Mahal" classes="carousel-item" />
                <Image link="/national-park.jpg" alt="Jim Corbett National Park" classes="carousel-item" />
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}
