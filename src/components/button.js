import React from 'react'

function Button(props){
    let style = {
        color:props.color,
        backgroundColor:props.bgcolor,
        borderRadius:props.radius,
        border:`solid 2px ${props.border}`,
        height:props.height,
        width:props.width,
        display:"flex",
        textAlign:"center",
        fontWeight:props.bold,
        fontSize:props.size,
        cursor:"pointer"
    }
    return(
        <div>
            <input type="button" style={style} value={props.name}/>
        </div>
    );
}

export default Button;
