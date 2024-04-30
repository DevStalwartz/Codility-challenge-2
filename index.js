// for loop
// define function
//conditional statements

function solution(S) {
    let b = false;
    for (let Char of S) {
        if (Char === "b") {
            b = true;
        } else if (Char === "a" && b) {
            return 0
        }
    }
    return 1;
}

console.log(solution("aabbb"))
