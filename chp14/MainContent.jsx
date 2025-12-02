import React, {useContext} from "react";
import ThemeContext from "./ThemeContext";

export default function MainContent() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            padding: "1.5rem",
            backgroundColor: theme == "light" ? "white" : "black",
            color: theme == "light" ? "black" : "white"
        }}>
            <div style={{margin: "100px"}}>
                <p>현재 이 페이지는 Dark 또는 Light 테마로 변경 가능합니다.</p>
                <button onClick={toggleTheme}>테마 변경</button>
            </div>
        </div>
    )
}