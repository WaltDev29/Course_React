import React from "react";

const student = [
    {
        id: 1,
        name: "호석",
        grade: 1,
        major: "인공지능소프트웨어"
    },
    {
        id: 2,
        name: "은호",
        grade: 2,
        major: "연극영화"
    },
    {
        id: 3,
        name: "상원",
        grade: 3,
        major: "통계"
    },
    {
        id: 4,
        name: "성은",
        grade: 24,
        major: "연극영화"
    }
]

function StudentAttendance() {
    return (
        <div>
            <h1>학생 출석부</h1>
            <ul>
                {student.map(s => {
                    return (
                        <li key={s.id} style={{marginTop:50}}>
                            <p>이름 : {s.name}</p>
                            <p>학년 : {s.grade}</p>
                            <p>전공 : {s.major}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default StudentAttendance;