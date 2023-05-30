/** product: calculate the product of an array of numbers. */

function product(nums) {
  // Base Case:
  if (nums.length === 0) return 1;

  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  // ["hello", "hi", "hola"] -> 5

  // Base Case 0:
  if (words.length === 0) return 0;

  // Base Case:
  if (words.length === 1) return words[0].length;

  if (words[0].length > words[1].length) {
    return longest(words.splice(0, 1));
  } else {
    return longest(words.slice(1));
  }
}

/** everyOther: return a string with every other letter. */
//'apple' -> 'ape' -> Math.floor(returnString.length) = str/2
//'poop' -> 'po' -> Math.floor(returnString.length) = str/2

function everyOther(str) {
  //base:
  if (str.length === 0) return "";
  if (str.length === 1) return str;

  return str[0] + everyOther(str.slice(2));
}

/** find: return boolean depending on if val exists in array or not. */
// find ([1,2,3,4], 5) false
// find ([1,2,3,4], 2) true

function find(arr, val) {
  if (!arr.length) return false;

  if (arr[0] === val) return true;

  return find(arr.slice(1), val);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str[0] !== str[str.length - 1]) return false;
  if (str.length <= 1) return true;

  return isPalindrome(str.slice(1, -1));
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (!str.length) return "";

  return str.slice(-1) + revString(str.slice(0, -1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

// ["1", "2", "3", "4", "5"]    3   = index   
// 2, 3, 4, 5                   2    
// 3, 4, 5                      1
// 4, 5             FOUND       0

function findIndex(arr, val) {
  // if (i === arr.length) return -1;

  // if (arr[i] === val) return i;

  // return findIndex(arr, val, ++i);


  // BC
  if (arr.length === 0) return -1;



}



/** gatherStrings: given an object, return an array of all of the string values. */
// let nestedObj = {
//   firstName: "Lester",
//   favoriteNumber: 22,
//   moreData: {
//     lastName: "Testowitz"
//   },
//   funFacts: {
//     moreStuff: {
//       anotherNumber: 100,
//       deeplyNestedString: {
//         almostThere: {
//           success: "you made it!"
//         }
//       }
//     },
//     favoriteString: "nice!"
//   }
// };


function gatherStrings(obj) {
  const stringVals = [];
  for (const key in obj){
    if (typeof obj[key] === 'string') stringVals.push(obj[key]);
    if (typeof obj[key] === 'object') {
       const subArr = gatherStrings(obj[key]);
       stringVals.push(...subArr);
    }
  }

  return stringVals;
}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */


function binarySearch(arr, val) {
  if (arr.length === 1 && arr[0] !== val) return false;

  const middle = Math.floor(arr.length / 2);
  if(arr[middle] === val) return true;

  if(arr[middle] < val) {
    return binarySearch(arr.slice(middle));
  } else {
    return binarySearch(arr.slice(0, middle));
  }
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val) {}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }

module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
