import { mount } from 'enzyme';

//redux
import Root from 'redux/Root';

import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
    const initialState = {
        comments: ['Comment 1', 'Comment 2'],
    };

    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    );
});

afterEach(() => {
    wrapped.unmount();
});

it('creates one LI per comment', () => {
    expect(wrapped.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
    expect(wrapped.render().text()).toContain('Comment 1');
    expect(wrapped.render().text()).toContain('Comment 2');
});
