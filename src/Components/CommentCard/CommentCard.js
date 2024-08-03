import { format } from 'date-fns';

const CommentCard = ({id, title, content, time, stockId, userId}) => {


    const formatedTime = format(new Date(time), 'yyyy-MM-dd');
    return(
        <div className="comment-card">
            <h2 className="comment-header">{title}</h2>
            <div className="content">
                <p>{content}</p>
                <p>{formatedTime}</p>
            </div>
            <button className="edit-button">تدوین نظر</button>
        </div>
    )
}

export default CommentCard;