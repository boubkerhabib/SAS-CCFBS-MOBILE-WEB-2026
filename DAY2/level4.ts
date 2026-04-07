
/* 
Using TypeScript, build a traffic light simulator that:

Defines an enum called TrafficLight with values: Red, Yellow, Green
Stores a sequence of lights in an array
Loops through the array using for...of
For each light, uses a switch statement to print the correct action
Light	Action
Red	"🔴 STOP — Wait for green"
Yellow	"🟡 SLOW DOWN — Prepare"
Green	"🟢 GO — Clear to proceed"

typescript
// Your sequence to process:
let sequence = [
  TrafficLight.Green,
  TrafficLight.Yellow,
  TrafficLight.Red,
  TrafficLight.Green,
  TrafficLight.Red
];
Requirements:

Use enum (TypeScript)
Use switch with a default case that prints "⚠️ Unknown signal"
Remember to add break after each case
Expected output:


🟢 GO — Clear to proceed
🟡 SLOW DOWN — Prepare
🔴 STOP — Wait for green
🟢 GO — Clear to proceed
🔴 STOP — Wait for green


*/

enum TrafficLight {
  Red,
  Yellow,
  Green
}




let sequence = [
  TrafficLight.Green,
  TrafficLight.Yellow,
  TrafficLight.Red,
  TrafficLight.Green,
  TrafficLight.Red
];

for (let light of sequence) {
  switch (light) {
    case TrafficLight.Red:
      console.log("🔴 STOP — Wait for green");
      break;

    case TrafficLight.Yellow:
      console.log("🟡 SLOW DOWN — Prepare");
      break;

    case TrafficLight.Green:
      console.log("🟢 GO — Clear to proceed");
      break;

    default:
      console.log("Unknown signal");
      break;
  }
}



