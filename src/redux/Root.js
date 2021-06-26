import { Provider } from 'react-redux';
import { store } from 'redux/store';

const Root = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default Root;
