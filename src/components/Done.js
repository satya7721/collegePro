import React from 'react'
import done from '../assets/done.png';

import '../App.css';


export default function Done() {
    return (
        <div style={{textAlign:"center"}}>
           <img src={done} className="Done"></img>
           <h3 className="Greet">Thank you !!</h3>
        </div>
    )
}
