import CommentCard from "../CommentCard/CommentCard";
import {useEffect, useState} from "react";

const CommentCardList = ({ comments }) => {

    // const [CommentsList, setCommentsList] = useState([]);

    return (
        <div className="comment-card-list">
            {comments.map(comment => <CommentCard key={comment.id} comment={comment} />)}
        </div>
    )
}

export default CommentCardList;
