import React from "react";

const unitNames = {
    km: "킬로미터",
    mile: "마일"
}

export default function DistanceInput(props) {
    return (
        <div>
            <label className="input-label">
                {unitNames[props.unit]}입력
            </label>
            <input
                type="text"
                className="input-field"
                value={props.distance}
                placeholder={`${unitNames[props.unit]}를 입력하세요.`}
                onChange={e => props.onDistanceChange(e.target.value)}
            />
        </div>
    )
}