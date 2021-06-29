import React from 'react'
import './Footer.css'

const Footer = props => {
    return (
        <footer>
            <div className="footer-items">
                <ul>
                    <li>Shoes</li>
                    <li>Jewelry</li>
                    <li>Scarves</li>
                    <li>Pantyhose</li>
                    <li>Underwear</li>
                    <li>Pants</li>
                    <li>Sweaters</li>
                </ul>
            </div>
            <div className="footer-more">
                <p><span>More</span></p>
            </div>
        </footer>
    )
}

export default Footer