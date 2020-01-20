"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const t = require("io-ts");
const ThrowReporter_1 = require("io-ts/lib/ThrowReporter");
const Product = t.interface({
    id: t.number,
    name: t.string,
    quantity: t.number,
    type: t.union([t.literal("FURNITURE"), t.literal("BOOK")])
});
const Products = t.array(Product);
function getProducts() {
    // A mock REST API response
    const apiResponse = [{
            id: 1,
            name: "Table",
            type: "FURNITURE",
            quantity: 5
        }, {
            id: 2,
            name: "The Lord of the Rings",
            type: "BOOK",
            quantity: 10
        }];
    // Decode i.e. validate the api response
    const result = Products.decode(apiResponse);
    // Use a reporter to throw an error if validation fails
    ThrowReporter_1.ThrowReporter.report(result);
    // Get the validated value and use it in your application
    return result;
}
const ss = getProducts();
console.log(ss);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZHVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQcm9kdWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJCQUEyQjtBQUMzQiwyREFBd0Q7QUFFeEQsTUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4QixFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU07SUFDWixJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU07SUFDZCxRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU07SUFDbEIsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztDQUM3RCxDQUFDLENBQUM7QUFFSCxNQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRWxDLFNBQVMsV0FBVztJQUNoQiwyQkFBMkI7SUFDM0IsTUFBTSxXQUFXLEdBQUcsQ0FBQztZQUNqQixFQUFFLEVBQUUsQ0FBQztZQUNMLElBQUksRUFBRSxPQUFPO1lBQ2IsSUFBSSxFQUFFLFdBQVc7WUFDakIsUUFBUSxFQUFFLENBQUM7U0FDZCxFQUFFO1lBQ0MsRUFBRSxFQUFFLENBQUM7WUFDTCxJQUFJLEVBQUUsdUJBQXVCO1lBQzdCLElBQUksRUFBRSxNQUFNO1lBQ1osUUFBUSxFQUFFLEVBQUU7U0FDZixDQUFDLENBQUM7SUFDSCx3Q0FBd0M7SUFDeEMsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1Qyx1REFBdUQ7SUFDdkQsNkJBQWEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0IseURBQXlEO0lBQ3pELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFFRCxNQUFNLEVBQUUsR0FBRyxXQUFXLEVBQUUsQ0FBQTtBQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFBIn0=