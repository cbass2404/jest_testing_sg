import ReactDOM from 'react-dom';
import App from '../App';

it('shows a comment box', () => {
    // create simulated DOM element for react
    const div = document.createElement('div');

    // creates App component in the fake DOM element
    ReactDOM.render(<App />, div);

    // Look inside the simulated div
    // checks to see if the CommentBox is in there
    expect(div.innerHTML).toContain('Comment Box');

    // unmounts the fake DOM element to prevent sluggishness in test suite
    ReactDOM.unmountComponentAtNode(div);
});
