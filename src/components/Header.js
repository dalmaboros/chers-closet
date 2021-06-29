import React from 'react'
import './Header.css'

const Header = props => {
    return (
        <header>
            {/* <div id="header-col-1">
                <p>Cher's Wardrobe</p>
            </div>
            <div id="header-col-2">
            <p><span>Fall Fashions</span></p>
            </div>
            <div id="header-col-3">

            </div> */}
            <ul>
                <li id="header-li-1">Cher's Wardrobe</li>
                <li id="header-li-2"><span>Fall Fashions</span></li>
                <li id="header-li-3"></li>
            </ul>
        </header>
    )
}

export default Header