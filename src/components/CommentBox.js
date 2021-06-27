import { useState, useEffect, useCallback } from 'react';

// redux
import { connect } from 'react-redux';
import * as actions from 'redux/actions';

const CommentBox = ({ saveComment, fetchComments, auth, history }) => {
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        saveComment(comment);

        setComment('');
    };

    const shouldNavigateAway = useCallback(() => {
        if (!auth) {
            history.push('/');
        }
    }, [auth, history]);

    useEffect(() => {
        shouldNavigateAway();
    }, [shouldNavigateAway]);

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

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, actions)(CommentBox);
