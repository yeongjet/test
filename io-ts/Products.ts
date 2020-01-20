import * as t from 'io-ts';
import { ThrowReporter } from "io-ts/lib/ThrowReporter";

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
    ThrowReporter.report(result);
    // Get the validated value and use it in your application
    return result;
}

const ss = getProducts()
console.log(ss)