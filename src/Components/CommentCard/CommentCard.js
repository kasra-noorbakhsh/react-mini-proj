import { format } from 'date-fns';

const CommentCard = ({comment}) => {
    const time = comment.createdOn;
    const formatedTime = format(new Date(time), 'yyyy-MM-dd');
    return(
        <div className="comment-card">
            <h2 className="comment-header">{comment.title}</h2>
            <div className="content">
                <p>{comment.content}</p>
                <p>{formatedTime}</p>
            </div>
            <button className="edit-button">تدوین نظر</button>
        </div>
    )
}

export default CommentCard;