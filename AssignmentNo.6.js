//Q.1 Write JavaScript function that returns array elements larger than a number.

let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7,];
let num = 5;

function getElements(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            console.log(arr[i]);
        }
    }
}

getElements(arr, num);



//Q.2 Write a javaScript function to extract unique characters from a string.

let str = "abcghdefijlmk";

function getUnique(str) {
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        let currchar = str[i];
        if(ans.indexOf(currchar) == -1) {
            ans += currchar;
        }
    }

    return ans;
}

getUnique(str);



//Q.3 Write a javaScript dunctio that accepts a list of country names as input and returns the longest country name as output.

let Country = ["India", "Tanzania", "USA", "Germany"];

function longName(country) {
    let ansIdx = 0;
    for (let i = 0; i < country.length; i++) {
        let ansLen = contry[ansIdx].length;
        let currLen = country[i].length;
        if (currLen > ansLen) {
            andIdx = i;
        }
    }
    return country[andIdx]
}

longName(Country);

//Q.4 Write a javaScript function to count number of vowels in a stirng argument.

let name = "Aman Shukla, Chhiki";

function countVowels(name) {
    let count = 0;
    for (let i = 0; i < name.length; i++) {
        if(
            name.charAt(i) == "a" ||
            name.charAt(i) == "e" ||
            name.charAt(i) == "i" ||
            name.charAt(i) == "o" ||
            name.charAt(i) == "u"
        ) {
            count++;
        }
    }
    return count;
}


//Q.5 Write a JavaScript function to generate a random number within a range (start, end).

let start = 100;
let end = 200;

function generateRandom(start, end) {
    let diff = end -start;
    return Math.floor(Math.random() * diff) + start;
}