import React from "react";
import "./Destination.css";
import Card from "./destinationComps/Card";

export default function Destination() {
  return (
    <div id="destinations">
      <div className="destinations-header">
        <h3>Destinations</h3>
        <h6>Discover your next adventure: Explore, Dream, Travel!</h6>
      </div>
      <div className="destinations-main">
        <Card 
            image="/goa-card.jpg" 
            alt="Goa" 
            title="Goa"
            link="https://bit.ly/mmt-goa"
            description="A coastal paradise renowed for its vibrant beaches, Portuguese architecture, and lively nightlife, offerering a perfect blend of relaxation and adventure"
        />
        <Card 
            image="/kerala-card.jpg" 
            alt="Kerala" 
            title="Kerala"
            link="https://bit.ly/mmt-kerala"
            description="Known as 'God's Own Country', Kerala boasts lush greenery, tranquil backwaters, and Ayurvedic wellness retreats, captivating visitors with its natural beauty and cultural richness"
        />
        <Card 
            image="/kashmir-card.jpg" 
            alt="Kashmir" 
            title="Kashmir"
            link="https://bit.ly/mmt-kashmir"
            description="Often referred to as 'Paradise on Earth', Kashmir enchants with its breathtaking landscapes of snow-capped mountains, serene lakes, and blooming gardens, providing a serene retreat amidst nature's splendor"
        />
        <Card 
            image="/rajasthan-card.jpg" 
            alt="Rajasthan" 
            title="Rajasthan" 
            link="https://bit.ly/mmt-rajasthan"
            description="The land of royal heritage, Rajasthan mesmerizes with its majestic forts, opulent palaces, and colorful bazaars, offering a glimpse into India's regal past and vibrant traditions"
        />
        <Card 
            image="/andaman-card.jpg" 
            alt="Andaman" 
            title="Andaman" 
            link="https://bit.ly/mmt-andaman"
            description="A tropical haven of pristine beaches, crystal-clear waters, and vibrant marine life, Andaman Islands beckon adventurers and beach lovers alike to explore its untouched beauty and indulge in unforgettable island experiences"
        />
        <Card 
            image="/eastIndia-card.jpg" 
            alt="East India" 
            title="East India"
            link="https://bit.ly/4azqu3h"
            description="A hidden gem of diverse cultures and stunning landscapes, North-east India captivates with its lush green valleys, cascading waterfalls, and vibrant festivals, offering a unique and enriching travel experience"
        />
      </div>
    </div>
  );
}
