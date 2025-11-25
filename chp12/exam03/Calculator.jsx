import React, {useState} from "react";
import TemperatureInput from "./TemperatureInput";
import BoilVerdict from "../exam01/BoilVerdict";

function toCelsius(fTemperature) {
    return ((fTemperature - 32) * 5) / 9;
}

function toFahrenheit(cTemperature) {
    return ((cTemperature * 9) / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) return "";

    const output = convert(input);
    const rounded = Number(output.toFixed(3));
    return rounded.toString();
}

export default function Calculator() {
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c")

    const handleTemperatureChange = (temperature, scale) => {
        setTemperature(temperature);
        setScale(scale);
    }

    const celsius = scale === "f" ?
        tryConvert(temperature, toCelsius) :
        temperature;
    const fahrenheit = scale === "c" ?
        tryConvert(temperature, toFahrenheit) :
        temperature;

    return (
        <div className="calculator-container" >
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleTemperatureChange}
            />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleTemperatureChange}
            />
            <BoilVerdict celcious={parseFloat(celsius)} />
        </div>
    )
}
