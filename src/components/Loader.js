import React from 'react'
import { useHistory } from 'react-router'
import loader from '../images/loader.gif'
import './Loader.css'

function Loader() {
    const history = useHistory()
  
    setTimeout(() => {
      history.push('/browse')
    }, 3300)
    return (
        <div id="loader-div">
            <img id="loader-img" src={loader} alt="" />
        </div>
    )
  }

export default Loader