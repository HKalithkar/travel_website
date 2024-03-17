import React from 'react'
import "./Contact.css"

export default function Contact() {
  return (
    <div className='contact'>
        <form>
            <div>
                <label for="name">Name</label>
                <input type="text" name="name" id="name" />
            </div>
            <div>
                <label for="email">Email ID</label>
                <input type="email" name="name" id="name" />
            </div>
            <div>
                <label for="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10" style= {{resize: 'none'}}></textarea>
            </div>
            <div>
                <button className='contact-submit btn btn-custom'>Submit</button>
            </div>
        </form>
    </div>
  )
}
