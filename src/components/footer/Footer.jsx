import React from 'react'
import "./Footer.css"

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>
            <p>&copy; {year} Travel Stack India | Developed by Sai Harshith Kalithkar</p>
        </footer>
    )
}
