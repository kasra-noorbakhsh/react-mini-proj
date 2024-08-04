import CommentCard from "../CommentCard/CommentCard";

import './CommentCardList.css'

const CommentCardList = ({ comments }) => {

    return (
        <div className="comment-card-list"> 
        <p className="comment-list-header-message">دیدگاه ها:</p>
            {comments.map(comment => <CommentCard key={comment.id} comment={comment} />)}
        </div>
    )
}

export default CommentCardList;
