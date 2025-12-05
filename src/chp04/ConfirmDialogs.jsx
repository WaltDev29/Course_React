import React from "react";
import ConfirmDialog from "./ConfirmDialog";

function ConfirmDialogs() {
    return (
        <div>
            <ConfirmDialog>내용을 확인한 후 버튼을 눌러주세요</ConfirmDialog><br/>
            <ConfirmDialog>한 번 더 눌러주세요</ConfirmDialog><br/>
            <ConfirmDialog>마지막으로 눌러주세요</ConfirmDialog>

        </div>
    )
}

export default ConfirmDialogs;