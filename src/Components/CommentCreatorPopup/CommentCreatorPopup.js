import "./CommentCreatorPopup.css";

const CommentCreatorPopup = ({ show, closeFunc }) => {
    
    if (show === false) return (<></>);
    return (
        <div className="comment-creator-popup-container">
            <div className="comment-creator-popup-content">
                <form className="comment-creator-popup-form">
                    <input type="text" name="topic"/>
                    <textarea name="content"/>
                    <div>
                        <button onClick={closeFunc}>انصراف</button>
                        <button onClick={closeFunc}>ثبت</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CommentCreatorPopup
