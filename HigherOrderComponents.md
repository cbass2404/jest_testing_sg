# Higher Order Components

-   A normal react component specifically made to help us reuse code inside an application
-   If there is a lot of duplicate code inside multiple components it is a perfect use for a higher order component

_component + HOC = enhanced/composed component with additional functionality or data_

-   Example of HOC:
    -   connect function in redux

## Creating HOCs

-   write the logic you want to reuse into a component
-   create a HOC file and add the HOC scaffold
-   Move the reusable logic into the HOC
-   Pass props/config/behavior through to the child component

```javascript
// HIGHER ORDER COMPONENT
import { Component } from 'react';

// redux
import { connect } from 'react-redux';

const requireAuth = (ChildComponent) => {
    class ComposedComponent extends Component {
        componentDidMount() {
            this.shouldNavigateAway();
        }

        componentDidUpdate() {
            this.shouldNavigateAway();
        }

        shouldNavigateAway() {
            if (!this.props.auth) {
                this.props.history.push('/');
            }
        }

        render() {
            return <ChildComponent {...this.props} />;
        }
    }

    const mapStateToProps = (state) => ({
        auth: state.auth,
    });

    return connect(mapStateToProps)(ComposedComponent);
};

export default requireAuth;

// CHILD COMPONENT
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
```
