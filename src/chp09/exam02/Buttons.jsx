import React from "react";

export function LogInButton(props){
    return <button onClick={props.onClick} style={{backgroundColor:"blue", color:"white"}}>Log In</button>
}

export function LogOutButton(props){
    return <button onClick={props.onClick} style={{backgroundColor:"red", color:"white"}}>Log Out</button>
}