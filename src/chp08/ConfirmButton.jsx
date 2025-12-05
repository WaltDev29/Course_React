import React, {useState} from "react";

function ConfirmButton() {
    const [isConfirmed, setIsConfirmed] = useState(false);

    // function handleConfirm() {
    //     setIsConfirmed((prevState) => !prevState);
    // }

    return (
        <div>
            <p>{isConfirmed ? "확인됨" : "확인하기"}</p>
            <button
                onClick={() => setIsConfirmed(prev => !prev)}
                disabled={isConfirmed}
            >
                {isConfirmed ? "확인됨" : "확인하기"}
            </button>
        </div>
    )
}

export default ConfirmButton;