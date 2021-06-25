import { useState } from 'react';

const CommentBox = () => {
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setComment('');
    };
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <h4>Add a Comment</h4>
            <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <div>
                <button>Submit Comment</button>
            </div>
        </form>
    );
};

export default CommentBox;
