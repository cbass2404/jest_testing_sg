import { useState } from 'react';

// redux
import { connect } from 'react-redux';
import * as actions from 'redux/actions';

// components
import requireAuth from 'components/requireAuth';

const CommentBox = ({ saveComment, fetchComments }) => {
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        saveComment(comment);

        setComment('');
    };

    return (
        <div>
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
            <button className="fetch-comments" onClick={fetchComments}>
                Fetch Comments
            </button>
        </div>
    );
};

export default connect(null, actions)(requireAuth(CommentBox));
