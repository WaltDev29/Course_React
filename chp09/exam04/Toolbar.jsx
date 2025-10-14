import React from "react";

const styles = {
    wrapper: {
        padding: 16,
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid gray",
        marginBottom: 15
    },
    greeting: {
        marginRight: 8
    }
}

function Toolbar(props) {
    const {isLoggedIn, onClickLogIn, onClickLogOut} = props;

    return (
        <div style={styles.wrapper}>
            {isLoggedIn && <span style={styles.greeting}>환영합니다!</span>}

            {isLoggedIn ?
                <button onClick={onClickLogOut}>로그아웃</button> :
                <button onClick={onClickLogIn}>로그인</button>}
        </div>
    )
}

export default Toolbar;