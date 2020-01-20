"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const t = require("io-ts");
const Either_1 = require("fp-ts/lib/Either");
const Positive = t.brand(t.number, // a codec representing the type to be refined
(n) => n >= 0, // a custom type guard using the build-in helper `Branded`
'Positive' // the name must match the readonly field in the brand
);
//type Positives = t.TypeOf<typeof Positive>
console.log(Either_1.isRight(Positive.decode(-1)));
//   let a: Positives = 1;
//   a-=100
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9zaXRpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQb3NpdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJCQUEyQjtBQUMzQiw2Q0FBMEM7QUFLeEMsTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FDdEIsQ0FBQyxDQUFDLE1BQU0sRUFBRSw4Q0FBOEM7QUFDeEQsQ0FBQyxDQUFDLEVBQXlDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLDBEQUEwRDtBQUNoSCxVQUFVLENBQUMsc0RBQXNEO0NBQ2xFLENBQUE7QUFFRCw0Q0FBNEM7QUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDM0MsMEJBQTBCO0FBQzFCLFdBQVcifQ==