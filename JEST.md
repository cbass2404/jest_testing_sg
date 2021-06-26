# Jest

What is Jest?

A facebook all inclusive framework for client and server side test automation. Open-sourced javascript library.

Used for:

-   React
-   Babel
-   Javascript
-   Node
-   Angular
-   Vue
-   NestJS
-   GraphQL

Why use Jest?

-   Ease of setup
-   Super fast execution
-   Does snapshots
-   All built in one (matchers, spies, runner & mocking library)

When to use Jest?

-   Unit testing
-   API Testing ( with other JS libraries like supertest, request-promise)
-   UI Testing ( with other JW libraries like puppeteer)
-   DB Testing ( against mongodb and dynamodb)

## Setting up the environment

---

1. In your main directory input the following into your terminal:

```
$ npm install --save-dev jest enzyme enzyme-adapter-react-17
```

_the last number of adapter-react is the version of react you are running_

-   create a setupTests.js file in src directory and put in the following to configure for enzyme:

```javascript
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });
```

[Enzyme Documentation](https://enzymejs.github.io/enzyme)

-   enzyme works in three ways:
    -   Static render
        -   Render the given component and return plain html
    -   Shallow render
        -   Render _just_ the given component and none of its children
    -   Full Dom
        -   Render the component and all of its children
        -   lets us modify it afterwards

## Handling absolute imports

-   in main directory create a jsconfig.json file and put in the following:

```json
{
    "compilerOptions": {
        "baseUrl": "src"
    },
    "include": ["src"]
}
```

_sets up absolute paths from src directory_

[documentation](https://facebook.github.io/create-react-app/docs/importing-a-component#absolute-imports)

2. In your package.json file add the following to your scripts section:

```json
 "scripts": {
    "test": "jest"
  }
```

3. In your root directory create a file named 'jsconfig.json' and add the following:

```json
{
    "typeAcquisition": {
        "include": ["jest"]
    }
}
```

4. In root directory run the following:

```
$ npm install @types/jest
```

5. Jest will test any file with a name.test.js or name.spec.js format.

```
$ npm run test multiply.test.js
```

_runs just that test file_

```javascript
// javascript
test.only...

// terminal
$ npm run test multiply.test.js
```

_runs only the test specified_

```json
// packacge.json
"scripts": {
    "test:watch": "jest --watchAll"
}
```

_watches all files and gives more options on rerun_

# Debugging

In vscode click the debugger icon then the gear/settings button at the top, set up the file like this.

```javascript
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Jest All",
      "program": "${workspaceFolder}/node_modules/.bin/jest",
      "args": ["--runInBand"],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "windows": {
        "program": "${workspaceFolder}/node_modules/jest/bin/jest",
      }
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Jest Current File",
      "program": "${workspaceFolder}/node_modules/.bin/jest",
      "args": ["${relativeFile}"],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "windows": {
        "program": "${workspaceFolder}/node_modules/jest/bin/jest",
      }
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Jest Selected Test Name",
      "program": "${workspaceFolder}/node_modules/.bin/jest",
      "args": ["${relativeFile}", "-t=${selectedText}$", "--watch"],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "windows": {
        "program": "${workspaceFolder}/node_modules/jest/bin/jest",
      }
    }
  ]
}
```

# Functions

## toBe()

---

```javascript
//function
const multiply = (a, b) => {
    return a * b;
};

module.exports = multiply;
//test
const multiply = require('./multiply');

describe('test multiply positive scenarios', () => {
    test('multiply 3*2 should equal to 6', () => {
        expect(multiply(3, 2)).toBe(6);
        expect(multiply(3, 2)).toBeGreaterThan(5);
        expect(multiply(3, 2)).toBeLessThan(7);
        expect(multiply(3, 2)).toBeLessThanOrEqual(6);
    });
});
```

_toBe() is used when you are expected a value_

## not.toBe()

---

```javascript
describe('test multiply positive scenarios', () => {
    test('multiply 4*3 should not equal 11', () => {
        expect(multiply(4, 3)).not.toBe(11);
    });
});
```

## Common Matchers

---

```javascript
test('object example', () => {
    const data = { first: 1 };
    data['second'] = 2;
    expect(data).toEqual({ first: 1, second: 2 });
});
```

_toEqual is used for value checking_

## toMatch

---

```javascript
test('there is pool in liverpool', () => {
    expect('Liverpool').toMatch(/pool/);
});
```

_checks if a value includes the match argument_

## null values

---

```javascript
test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});
```

## Arrays

---

```javascript
const carStock = ['BMW', 'Mercedes', 'Ferrari', 'Toyota'];

test('that the car stock list has a ferrari', () => {
    expect(carStock).toContain('Ferrari');
});
```

## Before and After // Setup and Teardown

---

-   beforeEach() && afterEach()
    -   Runs before/after each test

```javascript
const setupFirst = () => console.log('Setting up before tests run');
const tearDownNow = () => console.log('Finishing up after tests run');

describe('new account creation checks', () => {
    beforeEach(() => setupFirst());
    afterEach(() => tearDownNow());

    test('new account 1 created', () => {
        const account = 'account1';
        expect(account).toEqual('account1');
    });

    test('new account 2 created', () => {
        const account = 'account2';
        expect(account).toEqual('account2');
    });
});
```

-   beforeAll() && afterAll()
    -   runs before all tests run and after all tests finish

```javascript
const setup = () => console.log('Setting up before tests run');
const tearDown = () => console.log('Finishing up after tests run');

describe('new account creation checks', () => {
    beforeAll(() => setup());
    afterAll(() => tearDown());

    test('new account 1 created', () => {
        const account = 'account1';
        expect(account).toEqual('account1');
    });

    test('new account 2 created', () => {
        const account = 'account2';
        expect(account).toEqual('account2');
    });
});
```

## Asynchronous testing

---

-   Callbacks
-   Promises
-   async/await

```javascript
// javascript file
const fetchDataOverApi = async () => {
    return 'John';
};

module.exports = fetchDataOverApi;

// test file
const fetchDataOverApi = require('./fetchData');

// bad
// test('the user data for user 1', () => {
//     const data = fetchDataOverApi();
//     expect(data).toBe('John');
// });

test('the user data for user 1', async () => {
    const data = await fetchDataOverApi();
    expect(data).toBe('John');
});
```

## Snapshot testing

---

-   made for testing UI
-   fails if snapshot doesn't match current data

```javascript
// before snapshots were used you had to update assertion values to match current data
var itemStock = [
    { Id: '1', ItemName: 'Razors', Stock: '10' },
    { Id: '2', ItemName: 'Socks', Stock: '1' },
    { Id: '3', ItemName: 'Towels', Stock: '100' },
    { Id: '4', ItemName: 'Socks', Stock: '100' },
];
function filterItemStock(arr, key, term) {
    return arr.filter(function (obj) {
        return obj[key] === term;
    });
}
test('it returns all items with matching Id', () => {
    expect(filterItemStock(itemStock, 'Id', '1')).toEqual([
        { Id: '1', ItemName: 'Razors', Stock: '10' },
    ]);
});
test('it returns all items with matching ItemName', () => {
    expect(filterItemStock(itemStock, 'ItemName', 'Socks')).toEqual([
        { Id: '2', ItemName: 'Socks', Stock: '1' },
        { Id: '4', ItemName: 'Socks', Stock: '100' },
    ]);
});

// using snapshots
test('it returns all items with matching Id', () => {
    expect(filterItemStock(itemStock, 'Id', '1')).toMatchSnapshot();
});
test('it returns all items with matching ItemName', () => {
    expect(filterItemStock(itemStock, 'ItemName', 'Socks')).toMatchSnapshot();
});
```

_The primary purpose of snapshots is to avoid manually inputting data for tests_

# Stephen Grider Course

# What do we test?

-   Look at each individual part of your application
-   Imagine telling a friend 'here is what this piece of code does'
-   Write a test to verify each part does what you expect

## Testing design

-   Ask, what do we care about?

_Example_
App Component

-   shows the comment box inside of it
-   shows the comment list inside of it

CommentBox Component

-   shows a text area and a button
-   users can enter input into the text area and submit it

CommentList Component

-   shows one 'li' element per comment
-   text from each comment is visible

Comments Reducer

-   Properly hands actions with a type of 'SAVE_COMMENT'
-   Does not throw an error if it gets an action with any other type

SaveComment Action

-   Has a type of 'SAVE_COMMENT'
-   Produces an action that has a payload of the new comments text

## Setting up tests in React

-   Use the 'it' (an alias of test) global function that takes two arguments
    -   string, description of the test
        -   when making a name imagine the sentence blending with the 'it' function "'it' shows a comment box"
    -   function to run the test logic

```json
  "dependencies": {
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
```

-   jest-dom simulates a browser to trick react into thinking it is working in a browser

```javascript
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
```

_not the best way to test, it is always better to not access the inner workings of child components_

-   expect
    -   global function to say to expect the following code
-   (value that we are inspecting)
-   matcher statement
    -   designates how we want to inspect the value
-   (value that we expect to see)

```javascript
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
```

_this is the right way to test that components exist inside another component. it is a good habit to make each test break to make sure it is working right_

## beforeEach

-   used to do common setup for different tests inside the same file

```javascript
import { shallow } from 'enzyme';

import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />);
});

it('shows a comment box', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
});
```

## full dom

_the following example is better to do as a shallow render, but is done as full dom just for learning purposes_

```javascript
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';

let wrapped;

// does something before each function in the same file
beforeEach(() => {
    wrapped = mount(<CommentBox />);
});

// does something after each function in the same file
afterEach(() => {
    wrapped.unmount();
});

it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});
```

-   when doing full dom renders be sure to clean up after every test so it does not cause issues with other tests

## testing the ability to enter text to text area

-   use .simulate from enzymes library to simulate a change event

    -   as the first argument you must use the basic javascript name of the event, not react as in onChange is react and change is javascript
    -   use mock to create an event object as the second argument to simulate

-   use prop('propName') to get the values of prop keys on components and its children

```javascript
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
```

-   when doing multiple steps in a test it is good form to do assertion after each step to make sure it worked

```javascript
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
```

## describe function call

-   used to group tests together with common functionality

-   first argument is a string that describes the purpose of all the tests that follow

-   second is a function that contains all the tests
    -   describe is a good way to limit the scope of a beforeEach and afterEach statement

```javascript
describe('the text area', () => {
    beforeEach(() => {
        // find textarea element
        // simulate a 'change' event
        // provide a fake event object
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment' },
        });

        // force the component to update
        wrapped.update();
    });

    it('has a text area that users can type in', () => {
        // assert that the textareas value has changed
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });

    it('text area emptied after submit', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');

        wrapped.find('form').simulate('submit');
        wrapped.update();

        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
});
```

## redux

-   when using redux tests will fail if you only import the tested component into the test environment
-   setup a reusable redux root component as below to let jest know it is a redux using component

```javascript
import { Provider } from 'react-redux';
import { store } from 'redux/store';

const Root = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default Root;
```

-   then wrap the testing component with the root as below

```javascript
beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    );
});
```

## testing reducers

-   it is straight forward, create an action object and pass it to the created reducer

```javascript
it('handles actions of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment',
    };

    const newState = commentsReducer([], action);

    expect(newState).toEqual(['New Comment']);
});

it('handles action with unknown type', () => {
    // to test default of reducer
    const newState = commentsReducer([], { type: 'lakjsdflk' });

    expect(newState).toEqual([]);
});
```

## testing state

-   to test state you need an initial state variable for your redux store this gives it some test data to work with
-   other methods will get overwritten by the connect 'react-redux' function

```javascript
// root
const Root = ({ children, initialState = {} }) => {
    return <Provider store={store(initialState)}>{children}</Provider>;
};

// store
export const store = (initialState) => createStore(reducers, initialState);

// test
it('creates one LI per comment', () => {
    expect(wrapped.find('li').length).toEqual(lengthOfInitialStatePassed);
});
```

-   when testing the actual html output of a dom element text() function should be looked at with skepticism
    -   text will only return the text and not the html elements
-   it is better to use the enzyme render() method and look at the cheerioWrapper

```javascript
it('shows the text for each comment', () => {
    expect(wrapped.render().text()).toContain('Comment 1');
    expect(wrapped.render().text()).toContain('Comment 2');
});
```

## Api Testing

Unit Testing vs Integration Testing

-   Unit tests
    -   tests one thing at a time
    -   Examples:
        -   does the commentbox show a button?
        -   does the commentlist produce a list of 'LI' elements?
        -   does the action creator return an object
-   Integration tests
    -   tests many things together
    -   integration tests should not be in a shared folder with unit tests
    -   Examples:
        -   Does clicking 'Fetch Comments' show a list of 'LI's?

### Axios with Moxios in testing

[Moxios Documentation](https://github.com/axios/moxios)

-   JestDOM is a fake browser environment, requests will fail entirely when trying to reach outside resources

-   To get around this issue moxios intercepts the axios request and mocks data to send back so it does not immediately fail

```javascript
beforeEach(() => {
    moxios.install();
    // first argument is the url
    // second argument is the return object to mock
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{ name: 'Fetched #1' }, { name: 'Fetch #2' }],
    });
});

afterEach(() => {
    moxios.uninstall();
});
```

-   due to a split second delay in moxios intercepting and pushing the data back tests can fail because everything is done automatically
-   you can add a pause to compensate for the delay

### Done

-   because jest tries to run each line as fast as possible setTimeout can sometimes not work as intended
-   to get around this, the test/it callback can take an argument of done to tell the test to pause for just a moment

```javascript
beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{ name: 'Fetched #1' }, { name: 'Fetch #2' }],
    });
});

afterEach(() => {
    moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    );

    wrapped.find('.fetch-comments').simulate('click');

    setTimeout(() => {
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);

        done();
        wrapped.unmount();
    }, 100);
});
```

-   alternatively and more accurately you can use the moxios.wait() function to tell jest to wait on the step of the test to complete

```javascript
moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(2);

    done();
    wrapped.unmount();
});
```
