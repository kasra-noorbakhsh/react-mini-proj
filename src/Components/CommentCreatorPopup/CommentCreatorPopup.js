import { useState } from "react";

import "./CommentCreatorPopup.css";

const CommentCreatorPopup = ({ show, closeFunc, onSubmitFunc }) => {
	const [comment, setComment] = useState({
		title: "",
		content: "",
	});

	const addCommentContentProcess = (e) => {
		setComment((prevComment) => ({
			...prevComment,
			content: e.target.value
		}));
	};

	const addCommentTitleProcess = (e) => {
		setComment((prevComment) => ({
			...prevComment,
			title: e.target.value
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		onSubmitFunc(comment)
		closeFunc();
	};

	if (!show) return null;

	return (
		<div className="comment-creator-popup-container">
			<div className="comment-creator-popup-content">
				<form className="comment-creator-popup-form" onSubmit={handleSubmit}>
					<input
						type="text"
						name="topic"
						value={comment.title}
						onChange={addCommentTitleProcess}
					/>
					<textarea
						name="content"
						value={comment.content}
						onChange={addCommentContentProcess}
					/>
					<div className="popped">
						<button type="button" onClick={closeFunc}>انصراف</button>
						<button type="submit">ثبت</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CommentCreatorPopup;
