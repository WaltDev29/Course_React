import React from "react";
import Avatar from "./Avatar";
import styled from "styled-components";

const DivInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 8px;
`;

const DivName = styled.div`
    font-weight: bold;
    font-size: 20px;
    color: #333333;
`;

function UserInfo(props) {
    return (
        <DivInfo className="user-info">
            <Avatar user={props.user}/>
            <DivName className="user-info-name">
                {props.user.name}
            </DivName>
        </DivInfo>
    );
}

export default UserInfo;