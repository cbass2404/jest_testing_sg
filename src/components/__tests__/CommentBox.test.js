import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
    wrapped = mount(<CommentBox />);
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

it('has a text area that users can type in', () => {
    // find textarea element
    // simulate a 'change' event
    // provide a fake event object
    wrapped.find('textarea').simulate('change', {
        target: { value: 'new comment' },
    });

    // force the component to update
    wrapped.update();

    // assert that the textareas value has changed
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
});

it('text area emptied after submit', () => {
    wrapped.find('textarea').simulate('change', {
        target: { value: 'new comment' },
    });
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');

    wrapped.find('form').simulate('submit');
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('');
});
