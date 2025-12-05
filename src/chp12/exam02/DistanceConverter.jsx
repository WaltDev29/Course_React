import React, {useState} from "react";
import DistanceInput from "./DistanceInput";
import "./DistanceConverter.css"

function toKilometers(miles) {
    return miles * 1.60934
}

function toMiles(kilometers) {
    return kilometers / 1.60934
}

function tryConvert(distance, convert) {
    const input = parseFloat(distance);
    if (Number.isNaN(input)) return '';
    const output =  convert(input).toFixed(3);
    return output.toString();
}

export default function DistanceConverter() {
    const [distance, setDistance] = useState("0");
    const [unit, setUnit] = useState("km");

    const handleKmChange = distance => {
        setDistance(distance);
        setUnit("km")
    };

    const handleMileChange = distance => {
        setDistance(distance)
        setUnit("mile")
    };

    const kilometers = unit === "mile" ? tryConvert(distance, toKilometers) : distance;
    const miles = unit === "km" ? tryConvert(distance, toMiles) : distance;

    return (
        <div className="converter-container">
            <h1>거리단위변환기</h1>

            <div className="input-group">
                <DistanceInput
                    unit="km"
                    distance={kilometers}
                    onDistanceChange={handleKmChange}
                />
                <DistanceInput
                    unit="mile"
                    distance={miles}
                    onDistanceChange={handleMileChange}
                />
            </div>

            <p className="result-text">
                {`${kilometers} km는 ${miles} mile입니다.`}
            </p>
        </div>
    );
}