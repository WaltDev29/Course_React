import React from "react";
import styled from "styled-components"

const Card = styled.div`
&:hover {
    transform: translateY(-10px);
}

`;

const styles = {
    wrapper: {
        border: "3px solid wheat",
        borderRadius: "10px",
        padding: "30px",
        display: "flex",
        flexWrap: "wrap",
        gap: "20px"
    },
    title: {
        border: "5px dotted pink",
        borderRadius: "10px",
        textAlign: "center",
        padding: "10px",
    },
    card: {
        width: "300px",
        border: "1px solid gray",
        borderRadius: "10px",
        margin: "20px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        transition: "transform 0.3s ease"
    },
    img: {
        width: "100%",
        height: "250px",
        objectFit: "cover",
        borderRadius: "10px"
    },
    info: {
        marginLeft: "10px"
    },
    p: {
        margin: 0,
        fontSize: "0.9em"
    }
}

const student = [
    {
        id: 1,
        name: "김호석",
        grade: 1,
        major: "인공지능소프트웨어"
    },
    {
        id: 2,
        name: "안은호",
        grade: 2,
        major: "연극영화"
    },
    {
        id: 3,
        name: "고상원",
        grade: 3,
        major: "통계학"
    },
    {
        id: 4,
        name: "구성은",
        grade: 4,
        major: "연극영화"
    }
]


function AttendanceCard() {
    return (
        <div>
            <h1 style={styles.title}>학생 출석부</h1>
            <div style={styles.wrapper}>
                {student.map((s,idx) => {
                    return (
                        <Card key={s.id} style={styles.card}>
                            <img src={`https://randomuser.me/api/portraits/men/${idx}.jpg`} alt="프로필 이미지" style={styles.img}/>
                            <div style={styles.info}>
                                <h3>{s.name}</h3>
                                <p style={styles.p}>{s.grade}학년</p>
                                <p style={styles.p}>{s.major}과</p>
                            </div>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}

export default AttendanceCard;