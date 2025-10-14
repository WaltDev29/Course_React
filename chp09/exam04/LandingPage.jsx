import React, {useState} from "react";
import Toolbar from "./Toolbar";

function LandingPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const onClickLogIn = () => setIsLoggedIn(true)

    const onClickLogOut = () => setIsLoggedIn(false)

    return (
        <div>
            <Toolbar
                isLoggedIn = {isLoggedIn}
                onClickLogIn = {onClickLogIn}
                onClickLogOut = {onClickLogOut}
            />
            <div style={{padding:16, border:"1px solid pink", fontSize:"30px"}}>리액트 공부 중입니다.</div>
        </div>
    )
}

export default LandingPage;