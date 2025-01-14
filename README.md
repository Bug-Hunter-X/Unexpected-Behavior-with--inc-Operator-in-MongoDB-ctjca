# MongoDB $inc Operator Bug

This repository demonstrates a common error when using the `$inc` operator in MongoDB.  Incorrect usage can lead to unexpected behavior and potential data corruption.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected version.

## Problem

The original code attempts to decrement a counter using `$inc` without handling the possibility of the counter going below zero. This can lead to negative counter values, which may not be the desired behavior.

## Solution

The corrected code includes additional checks to prevent the counter from going below zero.  This ensures data integrity and avoids potential application errors.