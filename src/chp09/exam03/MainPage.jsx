import React, {useState} from "react";
import WarningBanner from "./WarningBanner";

function MainPage(props) {
    const [showWarning, setShowWarning] = useState(false)

    const handleToggleClick = () => {
        setShowWarning(pre => !pre)
    }

    return (
        <div className="main-page-container">
            <WarningBanner warning={showWarning}/>
            <button onClick={handleToggleClick} className={`toggle-button ${showWarning ? 'hide' : ''}`}>
                {showWarning ? "감추기" : "보이기"}
            </button>
        </div>
    )
}

export default MainPage;