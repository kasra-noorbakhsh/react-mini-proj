import CommentCard from "../CommentCard/CommentCard";
const CommentCardList = ({comments}) => {

    return (
        <div className="comment-card-list">
            {comments.map(comment => <CommentCard key={comment.id} comment={comment} />)}
        </div>
    )
}

export default CommentCardList;