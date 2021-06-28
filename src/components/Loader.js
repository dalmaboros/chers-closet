import React from 'react'
import './Loader.css'
import loader from '../images/loader.gif'

import { useHistory } from 'react-router'

function Loader() {
    const history = useHistory()
  
    setTimeout(() => {
      history.push('/browse')
    }, 3000)
    return (
        <div id="loader-div">
            <img id="loader-img" src={loader} alt="" />
        </div>
    )
  }

export default Loader