// palindrom checker

let userInput = "A man, a plan, a canal. Panama";
let newInput = "_eye";

let palindrome = (userIn) => {
    let palli;
    let temp;
    userIn = userIn.replace(/[\W_]+/g , '');
    userIn = userIn.toLowerCase();
    temp = userIn;
    userIn = userIn.split('');
    userIn = userIn.reverse();
    userIn = userIn.join('');
    if (temp === userIn){
        palli = true;
    }else{
        palli = false;
    }
    console.log(palli);
};

palindrome(userInput);
palindrome(newInput);