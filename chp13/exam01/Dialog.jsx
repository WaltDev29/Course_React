import React from "react";
import FancyBorder from "./FancyBorder";

export default function Dialog(props) {
    return (
        <FancyBorder color={props.color} >
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p>
                {props.message}
            </p>
        </FancyBorder>
    )
}