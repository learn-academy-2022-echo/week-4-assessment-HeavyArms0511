// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest
// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe("shuffle", () => {
    it("takes in an array and removes the first item from the array and shuffles the remaining content", () => {
        expect(shuffle(colors1)).toEqual(["blue", "green", "pink", "yellow"])
        expect(shuffle(colors2)).toEqual(["aquamarine",  "indigo", "ochre", "periwinkle", "saffron"])
    })
})

// FAIL  ./code-challenges.test.js
// shuffle
//   ✕ takes in an array and removes the first item from the array and shuffles the remaining content (2 ms)

// ● shuffle › takes in an array and removes the first item from the array and shuffles the remaining content

//   ReferenceError: shuffle is not defined


// b) Create the function that makes the test pass.

// Psuedo Code:
// Create a function with the name shuffle
// Take in an input
    // Take in the arrays colors1 and colors2 and use the method .shift() to remove the first item.
    // Then use the .sort method to shuffle the remaining items in the array.
// Output expected result
    // colors1 =
    // colors2 =

const shuffle = (array) =>{
    array.shift()
    return array.sort()
}


// PASS  ./code-challenges.test.js
// shuffle
//   ✓ takes in an array and removes the first item from the array and shuffles the remaining content (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.348 s, estimated 1 s
// Ran all test suites.



// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = {upVotes: 13, downVotes: 2}
// Expected output: 11
const votes2 = {upVotes: 2, downVotes: 33}
// Expected output: -31

describe("totalVotes", () => {
    it("takes in an object that contains up votes and down votes and returns the net total of votes", () => {
        expect(totalVotes(votes1)).toEqual(11)
        expect(totalVotes(votes2)).toEqual(-31)
    })
})

// FAIL  ./code-challenges.test.js
// shuffle
//   ✓ takes in an array and removes the first item from the array and shuffles the remaining content (2 ms)
// totalVotes
//   ✕ takes in an object that contains up votes and down votes and returns the net total of votes

// ● totalVotes › takes in an object that contains up votes and down votes and returns the net total of votes

//   ReferenceError: totalVotes is not defined

// b) Create the function that makes the test pass.

// Psuedo Code:
// Create a function named totalVotes
// Take in an input
    // Take in they key
    // create a variable that subtracts the upvotes from the downvotes
    // have that variable equal the sum of both keys
// Output expected result
    // votes1 = 11
    // votes2 = -31

const totalVotes = (key) => {
    let votes = (key.upVotes - key.downVotes)
    return votes
}

// PASS  ./code-challenges.test.js
// shuffle
//   ✓ takes in an array and removes the first item from the array and shuffles the remaining content (2 ms)
// totalVotes
//   ✓ takes in an object that contains up votes and down votes and returns the net total of votes

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.338 s

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

describe("noDupes", () => {
    it("takes in two arrays as arguments and returns one array with no duplicate values.", () => {
        expect(noDupes(["array", "object", "number", "string", "Boolean", "null", "undefined"]))
    })
})

// FAIL  ./code-challenges.test.js
// shuffle
//   ✓ takes in an array and removes the first item from the array and shuffles the remaining content (2 ms)
// totalVotes
//   ✓ takes in an object that contains up votes and down votes and returns the net total of votes (1 ms)
// noDupes
//   ✕ takes in two arrays as arguments and returns one array with no duplicate values.

// ● noDupes › takes in two arrays as arguments and returns one array with no duplicate values.

//   ReferenceError: noDupes is not defined

// b) Create the function that makes the test pass.

// Psuedo Code:
// Create a function named noDupes
// Take in an input
    // Create a new variable named newArr
    // Take in the two arrays and add them into a Set object using the spread operator.
    // Set iterates through the arrays and only allows unique values so any duplicates will not be added to the new array
    // return the newArr
// Output expected result
    // ["array", "object", "number", "string", "Boolean", "null", "undefined"]

const noDupes = (array) =>  {
let newArr = [...new Set([...dataArray1 ,...dataArray2])]
return newArr
}

// PASS  ./code-challenges.test.js
// shuffle
//   ✓ takes in an array and removes the first item from the array and shuffles the remaining content (2 ms)
// totalVotes
//   ✓ takes in an object that contains up votes and down votes and returns the net total of votes (1 ms)
// noDupes
//   ✓ takes in two arrays as arguments and returns one array with no duplicate values.

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.431 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.58s.

