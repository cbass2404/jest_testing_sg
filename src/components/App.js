import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={CommentList} />

                <Route path="/post" component={CommentBox} />
            </Switch>
        </Router>
    );
};

export default App;
