import React, {useEffect, useState} from "react";
import Dialog from "./Dialog";

const propList = [
    {
        color: "wheat",
        title: "어서 오세요",
        message: "우리 사이트에 방문하신 것을 환영합니다.",
    },
    {
        color: "yellow",
        title: "오늘 점심",
        message: "쌀국수 먹었습니다.",
    },
    {
        color: "pink",
        title: "오늘 저녁",
        message: "뭐 먹을까요?",
    }
]

export default function WelcomeDialog() {
    const [idx, setIdx] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIdx(prev => (prev+1) % propList.length);
        }, 1000)

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Dialog
                color={propList[idx].color}
                title={propList[idx].title}
                message={propList[idx].message}
            />
        </div>
    )
}