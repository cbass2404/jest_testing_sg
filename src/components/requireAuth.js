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
            return <ChildComponent />;
        }
    }

    const mapStateToProps = (state) => ({
        auth: state.auth,
    });

    return connect(mapStateToProps)(ComposedComponent);
};

export default requireAuth;
