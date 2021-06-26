import { mount } from 'enzyme';

// redux
import Root from 'redux/Root';

// components
import App from 'components/App';

it('can fetch a list of comments and display them', () => {
    // attempt to render the *entire* app
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    );
    // find the 'fetchComments' button and click it
    // Expect to find a list of comments
});
