import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';

it('shows a comment box', () => {
    // use shallow to render just the component and none of its REACT child components
    // use wrapped to show that this component has additional functionality
    const wrapped = shallow(<App />);

    // check that App has CommentBox inside of it
    // wrapped.find returns an array
    // check that the length of the array only has one instance of the item
    // if that is all that is supposed to be there
    expect(wrapped.find(CommentBox).length).toEqual(1);
});
