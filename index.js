// Code your solution here


// 1) index.js
//        findMatching()
//          returns all drivers that match the passed in name:
//      ReferenceError: findMatching is not defined
//       at Context.<anonymous> (test/indexTest.js:8:7)
//       at process.processImmediate (node:internal/timers:471:21)

//   2) index.js
//        findMatching()
//          returns matching drivers if case does not match but letters do:
//      ReferenceError: findMatching is not defined
//       at Context.<anonymous> (test/indexTest.js:15:7)
//       at process.processImmediate (node:internal/timers:471:21)

//   3) index.js
//        findMatching()
//          returns an empty array if there is no match:
//      ReferenceError: findMatching is not defined
//       at Context.<anonymous> (test/indexTest.js:21:7)
//       at process.processImmediate (node:internal/timers:471:21)
function findMatching(source, sought) {
    return source.filter (
        (possibleMatch) => possibleMatch.toLowerCase () === sought.toLowerCase()
    );
}


// 1) index.js
//        fuzzyMatch()
//          returns a driver if beginning provided letters match:
//      ReferenceError: fuzzyMatch is not defined
//       at Context.<anonymous> (test/indexTest.js:35:7)
//       at process.processImmediate (node:internal/timers:471:21)

//   2) index.js
//        fuzzyMatch()
//          does not return drivers if only middle or ending letters match:
//      ReferenceError: fuzzyMatch is not defined
//       at Context.<anonymous> (test/indexTest.js:39:7)
//       at process.processImmediate (node:internal/timers:471:21)

//   3) index.js
//        fuzzyMatch()
//          does not return drivers if only middle or ending letters match:
//      ReferenceError: fuzzyMatch is not defined
//       at Context.<anonymous> (test/indexTest.js:43:7)
//       at process.processImmediate (node:internal/timers:471:21)

function fuzzyMatch(source, testString) {
    return source.filter(
        (possibleMatch) => 
        possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    );
}

// 1) index.js
// matchName()
//   accesses the data structure to check if name matches:
// ReferenceError: matchName is not defined
// at Context.<anonymous> (test/indexTest.js:67:7)
// at process.processImmediate (node:internal/timers:471:21)

// takes an array of driver objects and a string as arguments
// each driver object contains two properties: name and hometown
// should return each element whose name property matches the 
// provided string argument

function matchName(source, soughtName) {
    return source.filter((record) => record.name === soughtName);

}