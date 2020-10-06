import React from 'react'
import clipart from '../images/clipart.png'

function Clipart(){
    return(
        <div className="clipart">
            <img src={clipart} alt="clipart" />         
        </div>
    );
}

export default Clipart