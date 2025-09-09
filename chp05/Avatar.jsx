import React from "react";
import styled from "styled-components";

const Img = styled.img `
    width : 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid #eeeeee;
`;

function Avatar(props) {
    return (
        <Img className="avatar"
             src={props.user.avatarUrl}
             alt={props.user.name}
        />
    );
}

export default Avatar;