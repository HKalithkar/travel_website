import React from 'react'

export default function Image(props) {
  return (
    <div className={props.classes} data-bs-interval="2000">
        <img src={props.link} className="d-block w-100" alt={props.alt} />
    </div>
  )
}
