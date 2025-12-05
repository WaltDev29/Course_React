import React from "react";

export default function BoilVerdict(props) {
    return (
        <p  className="boil-message">
            {props.celcious >= 100 ? "물이 끓고 있습니다." : "물이 끓지 않습니다."}
        </p>
    )
}