# JavaScript Loose Equality Bug

This repository demonstrates a common error in JavaScript when comparing null and undefined values using loose equality (==).  The loose equality operator does not distinguish between null and undefined in the same way that the strict equality operator (===) does, leading to potential errors.

## Bug Description
The provided JavaScript code contains a function that attempts to handle null and undefined inputs. However, due to the use of loose equality, the function produces unexpected results.  Specifically, the function incorrectly returns 0 when the input is null, and NaN when the input is undefined.

## Solution
The solution involves replacing the loose equality operator (==) with the strict equality operator (===). This ensures that the comparison is more precise, preventing unexpected results.

## How to reproduce
1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js` to see the buggy output.
4. Run `node bugSolution.js` to see the correct output.