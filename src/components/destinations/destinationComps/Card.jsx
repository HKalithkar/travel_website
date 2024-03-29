import React from 'react'

export default function Card(props) {
  return (
    <div className="card" style={{width: '18rem'}}>
        <img src={props.image} className="card-img-top" alt={props.alt} />
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <a href={props.link} className="btn btn-custom" target='_blank'>Interested</a>
        </div>
    </div>
  )
}
