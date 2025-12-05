import React, {useState} from "react";

const styles = {
    form: {
        display: "flex",
        flexDirection: "column",
        border: "1px solid gray",
        borderRadius: "10px",
        padding: "50px"
    },
    label: {
        margin: "10px"
        // border: "1px solid red"
    },
    input: {
        marginLeft: "10px",
        padding: "0.5rem",
        border: "1px solid #dddddd",
        borderRadius: "5px"
    },
    textarea: {
        marginLeft: "10px",
        padding: "0.5rem",
        border: "1px solid #dddddd",
        borderRadius: "5px"
    },
    button: {
        marginTop: "20px",
        padding: "0.8rem",
        backgroundColor: "pink",
        color: "white",
        border: "none",
        borderRadius: "10px"
    }
}

function NameForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');

    const handleChange = e => {
        const {target} = e;
        switch (target.id) {
            case "name":
                setName(target.value)
                break;
            case "email":
                setEmail(target.value);
                break;
            case "textarea":
                setText(target.value);
                break;
        }
    }

    const handleSubmit = e => {
        alert(`이름 : ${name}\n이메일 : ${email}\n\n--- 자기소개 ---\n${text}`);
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <label style={styles.label}>
                이름 :
                <input type="text" id="name" value={name} onChange={handleChange} style={styles.input}/>
            </label>
            <label style={styles.label}>
                이메일 :
                <input type="email" id="email" value={email} onChange={handleChange} style={styles.input}/>
            </label>
            <label style={styles.label}>
                자기소개 :
                <textarea id="textarea" value={text} onChange={handleChange} style={styles.textarea}/>
            </label>
            <button type="submit" style={styles.button}>제출</button>
        </form>

    )
}

export default NameForm;