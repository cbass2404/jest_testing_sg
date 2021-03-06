import { Provider } from 'react-redux';
import { store } from 'redux/store';

const Root = ({ children, initialState = {} }) => {
    return <Provider store={store(initialState)}>{children}</Provider>;
};

export default Root;
