import React from "react";
import UserInfo from "./UserInfo";
import styled from "styled-components"

const DivComment = styled.div`
    border: 1px solid #dddddd;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 15px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const DivText = styled.div`
    font-size: 15px;
    line-height: 1.6;
    color: #555555;
    margin-bottom: 10px;
`;

const DivDate = styled.div`
    font-size: 16px;
    color: #999999;
    text-align: right;
`;

const users = [
    {
        name: "김호석",
        comment: "수원",
        avatarUrl: "https://cdn.pixabay.com/photo/2023/12/21/15/06/coast-8461991_1280.jpg"
    },
    {
        name: "이형원",
        comment: "미아사거리",
        avatarUrl: "https://cdn.pixabay.com/photo/2023/05/03/11/16/character-7967336_1280.png"
    },
    {
        name: "이도훈",
        comment: "구로디지털단지",
        avatarUrl: "https://cdn.pixabay.com/photo/2023/05/03/10/37/character-7967246_1280.png"
    }
];

function Comment() {
    const currentDate = new Date();
    return (
        <div>
            {
                users.map((user) => {
                    return (
                        <DivComment className="comment">
                            <UserInfo user={user}/>
                            <DivText className="comment-text">
                                {user.comment}
                            </DivText>
                            <DivDate className="comment-date">
                                {currentDate.toDateString()}
                            </DivDate>
                        </DivComment>
                    );
                })
            }
        </div>
    )
}

export default Comment;