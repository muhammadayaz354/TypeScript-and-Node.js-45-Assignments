"use strict";
//Task No 1 :=
// Install Node.js, TypeScript and VS Code on your computer.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guest_List = void 0;
//Installation Completed.
//Task No 2 :=
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let personName = "Eric";
console.log(`“Hello ${personName}, would you like to learn some Python today?”`);
//Task No 3 :=
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//Lower Case:
let personName = "Syed Shamir";
console.log("lowercase:", personName.toLocaleLowerCase());
//Upper Case:
console.log("uppercase:", personName.toUpperCase());
//Title Case:
console.log("titlecase:", personName.replace(/\bw/g, c => c.toUpperCase()));
//Task No 4 :=
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
let author = "Thomas A. Edison";
let quote = "Tomorrow is my exam but i don't care because a single sheet of paper cannot decide my future";
console.log(`${author} Once Said, ${quote}`);
//Task No 5 :=
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let famousperson = "Thomas A. Edison";
let quote = "Tomorrow is my exam but i don't care because a single sheet of paper cannot decide my future";
let message = `${famousperson} Once Said, ${quote}`;
console.log(message);
//Task No 6 :=
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let personName = `\n\t Syed Shamir \t\n`;
console.log(personName);
let stripped = personName.trim();
console.log(stripped);
//Task No 7 & 8 :=
// umber Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// You should create four lines that look like this:
// for addition
console.log(4 + 4);
// for subtraction
console.log(12 - 4);
// for multiplication
console.log(2 * 4);
// for division
console.log(16 / 2);
//Task No 9 :=
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let favoriteNumber = 56;
let message = ` My favorite Number Is ${favoriteNumber} `;
console.log(message);
//Task No 10 :=
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
//This is Ayaz;
//Todat date is 2/22/2024;
// This Program will be print a Famous quote:
console.log("Tomorrow is my exam but i don't care because a single sheet of paper cannot decide my future");
//This is Ayaz;
//Todat date is 2/22/2024;
// This Program will be Adding numbers:
console.log(5 + 6);
//Task No 11 :=
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let friendsName = ["shamir", "wajahat", "affan", "hammad", "awais"];
for (let i = 0; i < friendsName.length; i++) {
    console.log(friendsName[i]);
}
//Task No 12 :=
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let friendsName = ["shamir", "wajahat", "affan", "hammad", "awais"];
let message = ("> university is closed on monday");
for (let i = 0; i < friendsName.length; i++) {
    console.log(friendsName[i] + message);
}
//Task No 13 :=
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transportation = ["China 70 Motercycle", "Honda 125 Motercycle", "CNG Risksha", "Bus", "land cruiser"];
let statements = "I would like to own a ";
for (let i = 0; i < transportation.length; i++) {
    console.log(statements + transportation[i]);
}
//Task No 14 :=
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let Guest_List = ["Hafsa", "irhsa", "Mahanoor"];
exports.Guest_List = Guest_List;
for (let i = 0; i < Guest_List.length; i++) {
    console.log(Guest_List[i] + "\n As Salam U Alaikum I wanna Invited You For Dinner Tommorrow On My Sweet Home \n");
}
//Task No 15 :=
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let Guest_List = ["Hafsa", "irhsa", "Mahanoor",];
exports.Guest_List = Guest_List;
for (let i = 0; i < Guest_List.length; i++) {
    console.log(Guest_List[i] + "\n As Salam U Alaikum I wanna Invited You For Dinner Tommorrow On My Sweet Home \n");
}
let Remove_Guest = "Mahanoor";
let New_Guest = "Jasra";
Guest_List[2] = New_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log(Guest_List[i] + "\n As Salam U Alaikum I wanna Invited You For Dinner Tommorrow On My Sweet Home \n");
}
console.log("Mahanoor will not come tomorrow for dinner thats why i invited new guest as jasra");
//Task No 16 :=
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let Guest_List = ["Hafsa", "irhsa", "Mahanoor",];
exports.Guest_List = Guest_List;
for (let i = 0; i < Guest_List.length; i++) {
    console.log(Guest_List[i] + "\n As Salam U Alaikum I wanna Invited You For Dinner Tommorrow On My Sweet Home \n");
}
let Remove_Guest = "Mahanoor";
let New_Guest = "Jasra";
Guest_List[2] = New_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log(Guest_List[i] + "\n As Salam U Alaikum I wanna Invited You For Dinner Tommorrow On My Sweet Home \n");
}
console.log("Mahanoor will not come tomorrow for dinner thats why i invited new guest as jasra");
Guest_List.unshift("Shanza", "Ariba", "Hira");
for (let i = 0; i < Guest_List.length; i++) {
    console.log(Guest_List[i] + "\n As Salam U Alaikum I wanna Invited You For Dinner Tommorrow On My Sweet Home also i just found a bigger dinner table thats why i invited 3 more guest too \n");
}
//Task No 17 :=
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let Guest_List = ["Hafsa", "irhsa", "Mahanoor",];
exports.Guest_List = Guest_List;
for (let i = 0; i < Guest_List.length; i++) {
    console.log(Guest_List[i] + "\n As Salam U Alaikum I wanna Invited You For Dinner Tommorrow On My Sweet Home \n");
}
let Remove_Guest = "Mahanoor";
let New_Guest = "Jasra";
Guest_List[2] = New_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log(Guest_List[i] + "\n As Salam U Alaikum I wanna Invited You For Dinner Tommorrow On My Sweet Home \n");
}
console.log("Mahanoor will not come tomorrow for dinner thats why i invited new guest as jasra");
Guest_List.unshift("Shanza", "Ariba", "Hira");
for (let i = 0; i < Guest_List.length; i++) {
    console.log(Guest_List[i] + "\n As Salam U Alaikum I wanna Invited You For Dinner Tommorrow On My Sweet Home also i just found a bigger dinner table thats why i invited 3 more guest too \n");
}
console.log("Sorry my big table didnt arrived now thats why i just invited only 2 guest");
while (Guest_List.length > 2) {
    let remove_guest = Guest_List.pop();
    console.log(`Sorry ${remove_guest} I cant Invited You for dinner COz i dont have a big table`);
}
for (let i = 0; i < Guest_List.length; i++) {
    console.log(Guest_List[i] + "\n As Salam U Alaikum, Yes You are still invited on Dinner  \n");
}
Guest_List.splice(0, 2);
console.log(Guest_List);
//Task No 18:=
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let places = ['Bankok', 'Africa', 'Dubai', 'England', 'Crotia'];
console.log("Original :" + places);
console.log('copy' + [...places].sort());
console.log("Original :" + places);
console.log("Original :" + [...places].sort().reverse());
console.log("Original :" + places);
console.log("Original :" + places.reverse());
console.log("Original :" + places.reverse());
console.log('copy' + [...places].sort());
console.log('copy' + [...places].sort().reverse());
console.log(`Print Information From Guest List`);
console.log(`I Finally Invited ${Guest_List} From 14 Exersice`);
//Task No 19:=
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

import{ Guest_List } from '../14.Guest List/app';
console.log(`Print Information From Guest List`)
console.log(`I Finally Invited ${Guest_List} From 14 Exersice`);
//Task No 20:=
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let list_OF_Countries = ['UAE', 'USA', 'Australia', 'UK', 'Maldives'];
console.log("list Of Visitng Places");
for (let i = 0; i < list_OF_Countries.length; i++) {
    console.log(list_OF_Countries[i]);
}
;
//Task No 21:=
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
const student_1 = {
    fullname: "Syed Shamir",
    age: 23,
    percentage: 75
};
const student_2 = {
    fullname: "MD ayaz",
    age: 21,
    percentage: 72
};
console.log(`Studnet_1 Detail; Name: ${student_1.fullname}, Age: ${student_1.age}, Percentage: ${student_1.percentage}`);
console.log(`Studnet_2 Detail; Name: ${student_2.fullname}, Age: ${student_2.age}, Percentage: ${student_2.percentage}`);
//Task No 22:=
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let places = ['Saddar', 'Karsaz', 'Nazimabad', 'Board Office'];
// Error Statements:
console.log(places[4]);
// Correct Error Statements:
console.log(places[3]);
console.log(places[2]);
console.log(places[1]);
console.log(places[0]);
//Task No 23:=
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// 1st Test:
let car = "Audi RS";
console.log("Is car == 'Audi RS'? I predict True.");
console.log(car == "Audi RS");
// 2nd Test:
console.log("Is car.touppercase == 'AUDI RS'? I predict True.");
console.log(car.toUpperCase() == "AUDI RS");
// 3rd Test:
console.log("Is car.tolowercase !== 'audi rs'? I predict True.");
console.log(car !== "audi rs");
// 4th Test:
console.log("Is car !== 'Truck'? I predict True.");
console.log(car !== "Truck");
// 5th Test:
console.log("Is car !== 'Plane'? I predict True.");
console.log(car !== "plane");
// 6th Test:
console.log("Is car !== 'Audi RS'? I predict False.");
console.log(car !== "Audi RS");
// 7th Test:
console.log("Is car.touppercase !== 'AUDI RS'? I predict False.");
console.log(car.toUpperCase() !== "AUDI RS");
// 8th Test:
console.log("Is car == 'Ship'? I predict False.");
console.log(car == "Ship");
// 9th Test:
console.log("Is car == 'Audi R8'? I predict False.");
console.log(car == "Audi R8");
// 10th Test:
console.log("Is car == 'Ferrari'? I predict False.");
console.log(car == "Ferrari");
//Task No 24:=
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
//Tests for equality with strings For True Result;
console.log("LAPTOP" === "LAPTOP");
//Tests for equality with strings For false Result;
console.log(("LAPTOP") === "COMPUTER");
//Tests for inequality with strings For True Result;
console.log(("LAPTOP") !== "COMPUTER");
//Tests for inequality with strings For false Result;
console.log("LAPTOP" !== "LAPTOP");
//Tests using the lower case function For True Result;
console.log("SYED SHAMIR".toLowerCase() === "syed shamir");
//Tests using the lower case function For false Result;
console.log("SYED SHAMIR".toLowerCase() === "SYED SHAMIR");
//Numerical tests involving equality For true Result;
console.log(56 === 56);
//Numerical tests involving equality For false Result;
console.log((56) === 65);
//Numerical tests involving inequality For true Result;
console.log((56) !== 65);
//Numerical tests involving inequality For false Result;
console.log(56 !== 56);
//greater than For true Result; 
console.log(10 > 5);
//greater than For false Result;
console.log(5 > 10);
//less than For True Result;
console.log(5 < 10);
//less than For false Result;
console.log(10 < 5);
//greater than or equal to For True Result; 
console.log(6 >= 3);
//greater than or equal to false True Result;
console.log(6 >= 9);
//less than or equal to For True Result; 
console.log(3 <= 4);
//less than or equal to For false Result; 
console.log(4 <= 3);
//Tests using "and" operators For True Result; 
console.log(5 === 5 && 10 > 5);
//Tests using "and" operators For false Result;
console.log(5 === 5 && 10 < 5);
//Tests using "or" operators For True Result; 
console.log(5 === 5 || 10 < 5);
//Tests using "or" operators For fasle Result; 
console.log((5) === 6 || 10 < 5);
//Test whether an item is in a array For True Result;
let places = ['KARACHI', 'ISLAMABAD', 'LAHORE', 'MULTAN'];
console.log(places.includes('KARACHI'));
//Test whether an item is in a array For false Result;
console.log(places.includes('PESHAWAR'));
//Test whether an item is not in a array For True Result;
let fruits = ['ORANGE', 'BANANA', 'APPLE', 'STRAWBERRY'];
console.log(!fruits.includes('WATER MELLON'));
//Test whether an item is not in a array For false Result;
console.log(!fruits.includes('STRAWBERRY'));
//Task No 25:=
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
let alien_color = "green";
if (alien_color === "green") {
    console.log("Congratulations... player just earned 5 points");
}
//if test and another that fails. (The version that fails will have no output.)
alien_color = "blue";
if (alien_color === "green") {
    console.log("Sorry Your answer have no output");
}
//Task No 26:=
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
//If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.let alien_color:string = "green";
let alien_color = "green";
if (alien_color === "green") {
    console.log("the player just earned 5 points for shooting the alien");
}
else {
    console.log("the player just earned 10 points");
}
//If the alien’s color isn’t green, print a statement that the player just earned 10 points.
alien_color = "red";
if (alien_color === "green") {
    console.log("the player just earned 5 points for shooting the alien");
}
else {
    console.log("the player just earned 10 points");
}
//Task No 27:=
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
let alien_color = "green";
//If the alien is green, print a message that the player earned 5 points.  
if (alien_color === "green") {
    console.log("the player earned 5 points");
}
else if (alien_color === "yellow") {
    console.log("the player earned 10 points");
}
else if (alien_color === "red") {
    console.log("the player earned 15 points");
}
//If the alien is yellow, print a message that the player earned 10 points.\
alien_color = "yellow";
if (alien_color === "green") {
    console.log("the player earned 5 points");
}
else if (alien_color === "yellow") {
    console.log("the player earned 10 points");
}
else if (alien_color === "red") {
    console.log("the player earned 15 points");
}
//If the alien is red, print a message that the player earned 15 points.
alien_color = "red";
if (alien_color === "green") {
    console.log("the player earned 5 points");
}
else if (alien_color === "yellow") {
    console.log("the player earned 10 points");
}
else if (alien_color === "red") {
    console.log("the player earned 15 points");
}
//Task No 28:=
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
//Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
//If the person is less than 2 years old, print a message that the person is a baby.
let age = 1;
if (age < 2) {
    console.log("the person is a baby");
}
else if (age < 4) {
    console.log("the person is a toddler");
}
else if (age < 13) {
    console.log("the person is a kid");
}
else if (age < 20) {
    console.log("the person is a teenager");
}
else if (age < 65) {
    console.log("the person is an adult");
}
else {
    console.log("the person is an elder.");
}
//If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
age = 3;
if (age < 2) {
    console.log("the person is a baby");
}
else if (age < 4) {
    console.log("the person is a toddler");
}
else if (age < 13) {
    console.log("the person is a kid");
}
else if (age < 20) {
    console.log("the person is a teenager");
}
else if (age < 65) {
    console.log("the person is an adult");
}
else {
    console.log("the person is an elder.");
}
//If the person is at least 4 years old but less than 13, print a message that the person is a kid.
age = 7;
if (age < 2) {
    console.log("the person is a baby");
}
else if (age < 4) {
    console.log("the person is a toddler");
}
else if (age < 13) {
    console.log("the person is a kid");
}
else if (age < 20) {
    console.log("the person is a teenager");
}
else if (age < 65) {
    console.log("the person is an adult");
}
else {
    console.log("the person is an elder.");
}
//If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
age = 15;
if (age < 2) {
    console.log("the person is a baby");
}
else if (age < 4) {
    console.log("the person is a toddler");
}
else if (age < 13) {
    console.log("the person is a kid");
}
else if (age < 20) {
    console.log("the person is a teenager");
}
else if (age < 65) {
    console.log("the person is an adult");
}
else {
    console.log("the person is an elder.");
}
//If the person is at least 20 years old but less than 65, print a message that the person is an adult.
age = 30;
if (age < 2) {
    console.log("the person is a baby");
}
else if (age < 4) {
    console.log("the person is a toddler");
}
else if (age < 13) {
    console.log("the person is a kid");
}
else if (age < 20) {
    console.log("the person is a teenager");
}
else if (age < 65) {
    console.log("the person is an adult");
}
else {
    console.log("the person is an elder.");
}
//If the person is age 65 or older, print a message that the person is an elder.
age = 70;
if (age < 2) {
    console.log("the person is a baby");
}
else if (age < 4) {
    console.log("the person is a toddler");
}
else if (age < 13) {
    console.log("the person is a kid");
}
else if (age < 20) {
    console.log("the person is a teenager");
}
else if (age < 65) {
    console.log("the person is an adult");
}
else {
    console.log("the person is an elder.");
}
//Task No 29:=
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_fruits = ['mango', 'apple', 'orange'];
if (favorite_fruits.includes('mango')) {
    console.log("I really like mango");
}
if (favorite_fruits.includes('apple')) {
    console.log("I really like apple");
}
if (favorite_fruits.includes('orange')) {
    console.log("I really like orange");
}
if (favorite_fruits.includes('peach')) {
    console.log("I really like peach");
}
if (favorite_fruits.includes('banana')) {
    console.log("I really like banana");
}
//Task No 30:=
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
//     If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let usernames = ['admin', 'shamir', 'ayaz', 'zubair', 'hamza'];
for (let users of usernames) {
    if (users === 'admin') {
        console.log(" Hello admin, would you like to see a status report?");
    }
    else {
        console.log(` Hello ${users}, thank you for logging in again.`);
    }
}
//Task No 31:=
//  No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let usernames = ['admin', 'shamir', 'ayaz', 'zubair', 'hamza'];
usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
//Task No 32:=
//   Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users = ['ali', 'Haris', 'bilal', 'Salman', 'Shahbaz'];
let new_users = ['Wail', 'ali', 'Wasif', 'bilal', 'Muneer'];
let current_users_lower = current_users.map(user => user.toLocaleLowerCase());
for (let new_user of new_users) {
    if (current_users_lower.includes(new_user.toLocaleLowerCase())) {
        console.log(`sorry ${new_user} is already taken in current user names`);
    }
    else {
        console.log(`yes, ${new_user}  is still in  available in new users.`);
    }
}
//Task No 33:=
//  Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
//  • Store the numbers 1 through 9 in a array.
//  • Loop through the array.
//  • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of numbers) {
    if (number === 1) {
        console.log(`${number}st`);
    }
    else if (number === 2) {
        console.log(`${number}nd`);
    }
    else if (number === 3) {
        console.log(`${number}rd`);
    }
    else {
        console.log(`${number}th`);
    }
}
//Task No 34:=
//  Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
let favorite_pizza = ['pepperoni pizza', 'veg pizza', 'fajita pizza'];
for (let pizza of favorite_pizza) {
    console.log(pizza);
}
console.log("\n");
for (let pizza of favorite_pizza) {
    console.log(` I like ${pizza}`);
}
console.log("\n i like spicy pizza\n i like BB.Q pizza\n i like cheese pizza\n I really love pizza!");
//Task No 35:=
//  Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animals = ['cat', 'dog', 'horse'];
for (let animal of animals) {
    console.log(animal);
}
console.log("\n");
for (let animal of animals) {
    console.log(`A ${animal} would make a great pet`);
}
console.log("\n Any of these animals would make a great pet!");
//Task No 36:=
//  T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, text) {
    console.log(`the size of the shirt is ${size} and the message printed on shirt is ${text}`);
}
make_shirt('small', 'be simple');
//Task No 37:=
//  Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function large_shirt(size = 'large', text = ' I love TypeScript.') {
    console.log(`This is a ${size} shirt & message printed on the shirt is ${text}`);
}
large_shirt();
// different message.
large_shirt('medium', 'i love javascript');
large_shirt('small', 'i love pyhton');
//Task No 38:=
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country = 'pakistan') {
    console.log(`${city} is in ${country}`);
}
describe_city('karachi');
describe_city('dubai', 'UAE');
describe_city('sydney', 'Australia');
//Task No 39:=
//  City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return `"${city}, ${country}"`;
}
let F1 = city_country('Karachi', 'Pakistan');
let F2 = city_country('Dubai', 'UAE');
let F3 = city_country('Sydney', 'Australia');
console.log(F1);
console.log(F2);
console.log(F3);
//Task No 40:=
// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artist, album_title) {
    let object = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        album_title: album_title.charAt(0).toUpperCase() + album_title.slice(1)
    };
    return object;
}
let album = make_album('atif aslam', 'adat');
console.log(album);
album = make_album('Arjit singh', 'chaleya');
console.log(album);
album = make_album('NFAK', 'KAMLI WALE');
console.log(album);
//Task No 41:=
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
let magicians_names = ['Harry Houdini', 'David Blaine', 'Derren Brown', 'Dynamo'];
show_magicians(magicians_names);
//Task No 42:=
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' The Great';
    }
}
let magicians_name = ['Harry Houdini', 'David Blaine', 'Derren Brown', 'Dynamo'];
make_great(magicians_name);
show_magicians(magicians_name);
//Task No 43:= 
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' The Great';
    }
}
function make_great2(magicians) {
    let Greatmagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        Greatmagicians.push(magicians[i] + 'The Great');
    }
    return Greatmagicians;
}
let magicians2 = ['Harry Houdini', 'David Blaine', 'Derren Brown', 'Dynamo'];
let magicians3 = make_great2(magicians2);
show_magicians(magicians2);
show_magicians(magicians3);
//Task No 44:= 
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwich(flavour) {
    console.log('Sandwich Order: ');
    for (let i = 0; i < flavour.length; i++) {
        console.log(`${flavour[i]}`);
    }
}
console.log('This order for 1st customer');
sandwich(['chicken', 'cheese']);
console.log('This order for 2nd customer');
sandwich(['beef', 'mutton']);
console.log('This order for 3rd customer');
sandwich(['vegetable', 'patato']);
//Task No 45:=
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function cars(manufacture, model) {
    return {
        manufacture,
        model,
    };
}
let object = cars("toyota", 2024);
console.log(object);
//"Thank you for the assignment! I've completed it and am ready for your feedback."
