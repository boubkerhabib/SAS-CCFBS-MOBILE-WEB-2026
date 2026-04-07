

let corrPassword: string = "boubker";
let attempts: string[] = ["hhhhh", "bib123", "boubker", "habib"];

let index: number = 0;
let tries: number = 0;



let isAuthenticated: boolean = false;

do {
    let currentAttempt = attempts[index];
    tries++;

    if (currentAttempt === corrPassword) {

        isAuthenticated = true;
        break;
    } else {
        console.log(` wrong password (${tries}/3)`);
    }

    index++;

} while (tries < 3 && index < attempts.length);

if (isAuthenticated) {


    console.log(`access granted! you used ${tries} attempt(s)!`);

} else {
    console.log("account locked. too many failed attempts!");


}