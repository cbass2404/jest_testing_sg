import { Link } from 'react-router-dom';

// redux
import { connect } from 'react-redux';
import * as actions from 'redux/actions';

const Header = ({ auth, changeAuth }) => {
    const handleAuth = () => {
        return auth ? (
            <button onClick={() => changeAuth(false)}>Sign Out</button>
        ) : (
            <button onClick={() => changeAuth(true)}>Sign In</button>
        );
    };

    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/post">Post</Link>
            </li>
            <li>{handleAuth()}</li>
        </ul>
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, actions)(Header);
