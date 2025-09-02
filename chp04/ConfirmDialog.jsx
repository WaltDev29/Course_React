import React from "react";
import Button from "./Button";

function ConfirmDialog(props) {
    return (
        <div>
            <p>내용을 확인한 후 버튼을 눌러주세요.</p>
            <br/>
            <Button color='green'>확인</Button>
            <Button color='red'>취소</Button>
            <Button color='blue'>초기화</Button>
        </div>
    )
}

export default ConfirmDialog;