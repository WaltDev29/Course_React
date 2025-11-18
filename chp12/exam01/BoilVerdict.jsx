import React from "react";

export default function BoilVerdict(props) {
    if (props.celcious >= 100) return <p>물이 끓고 있습니다.</p>
    else return <p>물이 끓지 않습니다.</p>
}