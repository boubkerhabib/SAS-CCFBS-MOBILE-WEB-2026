/*

⭐⭐⭐ Level 3 — Intermediate
Exercise 3: Shopping Cart Filter
You have an array of product prices. Write a TypeScript program that loops through the array and:

Skips any price that is 0 or negative (use continue)
Stops the loop entirely if a price is greater than 1000 (use break)
Otherwise, prints: "Item: $<price>"
typescript
let prices: number[] = [29, 0, 149, 55, -10, 1200, 89, 300];
Requirements:

Use for...of to loop through the array
Use continue to skip invalid prices
Use break to stop when price exceeds 1000
Use === or comparison operators (never ==)
Expected output:


Item: $29
Item: $149
Item: $55
⛔ Price too high! Stopping.

*/
let prices: number[] = [29, 0, 149, 55, -10, 1200, 89, 300];
for (let price of prices){
    if(price <= 0){
        continue;
    }
    if(price > 1000){
        console.log("price is bigg!");
        break;

    }
    console.log(`Item: $${price}`);
    
}
