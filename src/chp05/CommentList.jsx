import React from "react";
import Comment from "./Comment"

const comments = [
    {
        image:"https://avatar.iran.liara.run/public/35",
        name: "김호석",
        comment:"오늘도 화이팅"
    },
    {
        image:"https://avatar.iran.liara.run/public/18",
        name:"이도훈",
        comment:"붐뱁 베이스"
    },
    {
        image:"https://avatar.iran.liara.run/public/69",
        name:"허선희",
        comment:"Sunny!"
    }
]

function CommentList() {
    return (
        <div>
            {
             comments.map((comment) => {
                 return (
                     <Comment
                     image = {comment.image}
                     name = {comment.name}
                     text = {comment.comment}
                     />
                 )
             })
            }
        </div>
    )
}

export default CommentList;