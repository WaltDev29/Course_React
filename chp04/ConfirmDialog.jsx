import React from "react";
import Button from "./Button";
import styles from './ConfirmDialog.module.css';

function ConfirmDialog(props) {
    return (
        <div className={styles.div}>
            <p>{props.children}</p>
            <br/>
            <Button color='green'>확인</Button>
            <Button color='red'>취소</Button>
            <Button color='blue'>초기화</Button>
        </div>
    )
}

export default ConfirmDialog;