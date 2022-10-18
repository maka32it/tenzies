import React from "react"
export default function Die (props){
    const styles = {
        backgroundColor : props.isHold ? "#59E391" : "white"
    }
    return(
        <div className="die-box" style={styles} onClick={props.changeHold}>
             <h1 
             >{props.value}</h1>
        </div>
       
    )
}