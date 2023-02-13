// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const testArr = [[1], 2, [3, 4, [5, 6, [7, [8, 9, [10, 11]]]]]];

function flattenArr(arr, depth) {

  if (!Array.isArray(arr)) {
    return arr;
  }
  if (depth === undefined) {
    depth = 1;
  }

  const flatten = (arr, depth) => {
    return arr.reduce((acc, item) => {
      if (depth < 1) {
        return arr.slice();
      }
      return acc.concat(
        Array.isArray(item) ? flatten(item, depth - 1) : item
      );
    }, []);
  };
  return flatten(arr, depth);
}

console.log(flattenArr(testArr), 'test');
