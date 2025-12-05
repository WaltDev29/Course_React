import React from "react";
import styles from './Button.module.css';

function Button(props) {
    return (
        <button className={`${styles[`bg-${props.color}`]} ${styles.button}`}>
            <b>{props.children}</b>
        </button>
    )
}

export default Button;