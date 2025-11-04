import React, {useState} from "react";

const styles = {
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "50px",
        margin: "20px auto",
        border: "1px solid #dddddd",
        borderRadius: "10px",
        boxShadow: "0 5px 10px rgba(0,0,0,0.5)",
        backgroundColor: "#d7f3d2"
    },
    label: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "10px",
        fontSize: "1.2rem",
        color: "#333333"
    },
    select: {
        width: "100%",
        margin: "8px",
        padding: "10px",
        fontSize: "1rem",
        border: "1px solid #cccccc",
        borderRadius: "5px",
        cursor: "pointer",
        appearance: "none"
    },
    button: {
        marginTop: "20px",
        padding: "10px 20px",
        fontSize: "1.2rem",
        color: "white",
        border: "none",
        borderRadius: "10px",
        backgroundColor: "pink",
        cursor: "pointer",
        transition: "background-color 0.5s ease"
    }
}

function FruitSelect() {
    const [fruit, setFruit] = useState('apple');

    const handleChange = e => {
        setFruit(e.target.value);

    }

    const handleSubmit = e => {
        alert(`선택한 과일 : ${fruit}`);
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <label style={styles.label}>
                과일을 선택하세요
                <select id="fruit" value={fruit} onChange={handleChange} style={styles.select}>
                    <option value="apple">사과</option>
                    <option value="banana">바나나</option>
                    <option value="grape">포도</option>
                    <option value="watermelon">수박</option>
                </select>
            </label>
            <label style={styles.label}>
                다중 선택
                <select id="alph" multiple={true} style={styles.select}>
                    <option value="a">A</option>
                    <option value="b">B</option>
                    <option value="c">C</option>
                </select>
            </label>
            <button type="submit" style={styles.button}>제출</button>
        </form>
    )
}

export default FruitSelect;