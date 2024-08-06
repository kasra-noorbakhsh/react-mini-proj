import CommentCard from "../CommentCard/CommentCard";

import './CommentCardList.css'
import {useEffect, useState} from "react";

const CommentCardList = ({ comments: initialComments }) => {

    const [comments, setComments] = useState(initialComments);

    useEffect(() => {
        setComments(initialComments);
    }, [initialComments]);

    return (
        <div> 
        <p className="comment-list-header-message">دیدگاه ها:</p>
            {comments?.map(comment => <CommentCard key={comment.id} comment={comment} />)}
        </div>
    )
}

export default CommentCardList;
