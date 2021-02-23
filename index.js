// array.reduce(callback, initialValue);

const numbersArray = [1, 2, 3, 4];
const letterArray = ['s', 'e', 'a', 'n'];

const reducerCallback = (accumulator, item) => {
    console.log('accumulator, item', accumulator, item); // this is a side effect making this function non pure
    return accumulator + item;
}

const total = numbersArray.reduce(reducerCallback, 0);
console.log('\n')
const newString = letterArray.reduce(reducerCallback, '');

// console.log("the total is:", total);
// console.log("the string is:", newString);

const stateReducer = (state, action) => {
    switch(action.type) {
        case 'ADD':
            return state + action.item;
        case 'RESET':
            return '';
        default:
            return state;
    }
}

let wordStore = '';
//                   current state |     action type and item
console.log('Starting wordStore is:', wordStore, '\n');
wordStore = stateReducer(wordStore, { type: 'ADD', item: 'r' });
wordStore = stateReducer(wordStore, { type: 'ADD', item: 'e' });
wordStore = stateReducer(wordStore, { type: 'ADD', item: 'd' });
wordStore = stateReducer(wordStore, { type: 'ADD', item: 'u' });
wordStore = stateReducer(wordStore, { type: 'ADD', item: 'x' });
console.log('wordStore is:', wordStore, '\n');
wordStore = stateReducer(wordStore, { type: 'RESET' });
console.log('wordStore after reset:', wordStore, '\n');

const stateReducer2 = (state, action) => {
    switch(action.type) {
        case 'ADD':
            return state + action.item;
        case 'RESET':
            return 0;
        default:
            return state;
    }
}

let numberStore = 0;

console.log('Starting numberStore is:', numberStore);
numberStore = stateReducer2(numberStore, { type: 'ADD', item: 1 });
numberStore = stateReducer2(numberStore, { type: 'ADD', item: 2 });
numberStore = stateReducer2(numberStore, { type: 'ADD', item: 3 });
numberStore = stateReducer2(numberStore, { type: 'ADD', item: 4 });
numberStore = stateReducer2(numberStore, { type: 'ADD', item: 5 });
console.log('numberStore is:', numberStore, '\n');
numberStore = stateReducer2(numberStore, { type: 'RESET' });
console.log('numberStore after I RESET it is:', numberStore, '\n');