import { format } from 'date-fns';

import './CommentCard.css'

const CommentCard = ({ comment }) => {
	const time = comment.createdOn;
	const formatedTime = format(new Date(time), 'yyyy-MM-dd');

	return (
		<div className="comment-card">
			<h2 className="comment-header">{comment.title}</h2>
			<div className="content">
				<p className='comment-text'>{comment.content}</p>
			</div>
			<div className='footer-date-edit'>
				<p className='comment-date'>{formatedTime}</p>
				<button className="edit-button">تدوین نظر</button>
			</div>

		</div>
	)
}

export default CommentCard;
