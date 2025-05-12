// Detta är en kommentar och kommer inte tolkas av webbläsaren som kod

let myName = 'Jonathan'; // Sträng (string)
let age = 30; // Nummer (number)
const isStudent = true; // Boolean (true eller false)

myName = "Pelle";
myName = "Jonathan";

// console.log gör så att innehållet syns
// i console.log kan du använda "kommatecken" istället för "+" för att lägga ihop variablar, men i en variabel måste "+" användas
console.log("Hej, jag heter " + myName + ", jag är " + age);
console.log("Är student: " + isStudent);

let greeting = "Hej, jag heter " + myName + ", jag är " + age;
console.log(greeting);
console.log("Är student: " + isStudent);

if(myName =="Jonathan") {
// Detta bildar ett uttryck som kan vara sant eller falskt
    console.log("Du kallas Jonte!");
}
else {console.log("Du kallas inte Jonte")}

if(age < 30) { 
// > större än, < mindre än
    console.log("Du är ung och kry!")

    // == jämförelse, || = eller, && = och
} else if (myName == "Jonathan" && age == 30) { 
    console.log("Precis rätt!");
} 
