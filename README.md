# Codility-challenge-2
Deliverables 
Write a function solution that, given a string S consisting of N letters 'a' and/or 'b' returns 1 when all occurrences of letter 'a' are before all occurrences of letter 'b' and returns 0 otherwise.

Examples:

1. Given S = "aabbb", the function should return 1.

2. Given S = "ba", the function should return 0.

3. Given S = "aaa", the function should return 1. Note that 'b' does not need to occur in S.

4. Given S = "b", the function should return 1. Note that 'a' does not need to occur in S.

5. Given S = "abba", the function should return 0.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..300,000];
string S is made only of the characters 'a' and/or 'b'.

Solution
we start by defining the function solution(S)
next we let b to equal false
Using  the for loop we check if the letter is equal to a
if it is we return 1
if it is not we return 0

