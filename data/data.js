const faker = require("faker");
let products = [];
for(let i = 0; i < 100; i++){
    products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        precio : parseInt(faker.commerce.price()),
        image : faker.image.imageUrl(),
    });
}
module.exports = products;