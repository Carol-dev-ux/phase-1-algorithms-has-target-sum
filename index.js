function hasTargetSum(array, target) {

    let seenNumbers = new Set();
  
    for (let num of array) {
      if (seenNumbers.has(target - num)) {
        return true; 
      }

      seenNumbers.add(num);
    }
  
    return false;
  }


/* 
  Write the Big O time complexity of your function here
   O(n)
*/

/* 
  Add your pseudocode here
  1. Create an empty set called seenNumbers.
  2. Iterate through each element num in the input array:
    a. Calculate the difference diff = target - num.
    b. Check if diff is present in the set seenNumbers.
    c. If yes, return true (a pair is found).
    d. If no, add num to the set seenNumbers.
  3. If the loop completes without finding a pair, return false.
*/

/*
  Add written explanation of your solution here
   The function uses a set to keep track of seen numbers while iterating through the array. For each number in the array, it calculates the difference between the target and the current number. If this difference is already in the set, it means there is a pair that adds up to the target, and the function returns true. If no such pair is found after iterating through the entire array, the function returns false. Using a set ensures constant-time lookups, resulting in a time complexity of O(n), where n is the length of the input array.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
 
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));
  
    console.log("");
  
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));
  
    console.log("");
  
    console.log("Expecting: false");
    console.log("=>", hasTargetSum([1, 2, 5], 4));
  

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
