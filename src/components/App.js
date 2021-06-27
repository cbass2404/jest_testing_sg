import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// redux
import { connect } from 'react-redux';

// components
import Header from 'components/Header';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

const App = ({ auth }) => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={CommentList} />

                <Route path="/post" component={CommentBox} />
            </Switch>
        </Router>
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(App);
