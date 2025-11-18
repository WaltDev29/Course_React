import React, {useState} from "react";
import BoilVerdict from "./BoilVerdict";
import './ConfirmBoilVerdict.css';

export default function ConfirmBoilVerdict () {
    const [temperature, setTemperature] = useState("");

    const handleTemperature = e => setTemperature(e.target.value);

    const isBoiling = parseInt(temperature) >= 100;

    const containerClassName = `boil-container ${isBoiling ? "boiling" : "not-boiling"}`

    return (
        <div className={containerClassName}>
            <fieldset className="boil-fieldset">
                <legend>섭씨 온도를 입력하세요.</legend>
                <input
                    type="number"
                    value={temperature}
                    onChange={handleTemperature}
                    className="temperature-input"
                    placeholder="온도 입력"
                />
                <BoilVerdict celcious={parseInt(temperature)} />
            </fieldset>
        </div>
    )
}