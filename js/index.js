// Iteration 1: Names and Input
let hacker1 = "Bruno";
console.log (`The driver's name is ${hacker1}.`);

let hacker2 = "Luiz";
console.log (`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals:
let groupLetters = " ";   
for (let i = 0; i < hacker1.length; i++){
groupLetters += hacker1[i].toUpperCase() + ' ';
}
console.log(groupLetters);
        
    
//3.2 Print all the characters of the navigator's name, in reverse order:
let navigatorReverse = '';
for(let i = hacker2.length - 1; i >= 0; i--){
hacker2[i];
navigatorReverse += hacker2[i];
}
console.log(navigatorReverse);

//3.3 Depending on the lexicographic order:
if (hacker1.localeCompare(hacker2) < 0) {
    console.log(`The driver name goes first.`);
} else if (hacker1.localeCompare(hacker2) > 0){
    console.log(`Yo, the navigators goes first, definitely.`);
} else{
    console.log(`What?! You both have the same name?`);
}

// Bonus 1
// Bonus 1.1 Make your program count the number of words in the string.
const lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

