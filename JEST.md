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
$ npm install --save-dev jest
```

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
