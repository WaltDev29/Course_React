import React, {useState} from "react";
import {LogInButton, LogOutButton} from "./Buttons"
import Greeting from "../exam01/Greeting";

function LogInControl(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLoginClick = () => {setIsLoggedIn(true)}

    function handleLogOutClick() {
        setIsLoggedIn(false)
    }

    let button = isLoggedIn ? <LogOutButton onClick={handleLogOutClick}/> : <LogInButton onClick={handleLoginClick}/>;

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn}/>
            {button}
        </div>
    )
}

export default LogInControl;