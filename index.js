// array.reduce(callback, initialValue);

const numbersArray = [1, 2, 3, 4];
const letterArray = ['s', 'e', 'a', 'n'];

const reducerCallback = (accumulator, item) => {
    console.log('accumulator, item', accumulator, item);
    return accumulator + item;
}

const total = numbersArray.reduce(reducerCallback, 0);
const newString = letterArray.reduce(reducerCallback, '');
console.log("the total is:", total);
console.log("the string is:", newString);