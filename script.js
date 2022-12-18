'use strict';

class Bags {
    constructor(brand, model) {
        this.brand = brand,
        this.model = model
    }
    producedBy = () => console.log(`${this.model} bag is produced by ${this.brand}`);
}

class handCrafted extends Bags{
    constructor(brand, model) {
        super(brand, model)
    }
    handMade = () => console.log(`The bag is handmade and painstakingly hand-stitched.`);
}

class Hermes extends handCrafted {
    #productCode
    constructor(brand, model, price, productCode, size) { 
        super(brand, model),
        this.price = price,
        this.#productCode = productCode,
        this.size = size
    }
    costs = () => console.log(`The price of item ${this.#productCode} is ${this.price}`);
    isShipped = () => console.log(`This item can't be shipped outside the UK and EU`);
    hasRequirements = () => console.log(`This bag requires purchase history to be bought!`);
}

class Celine extends handCrafted {
    #productCode 
    constructor(brand, model, price, productCode, designer) {
        super(brand, model),
        this.price = price, 
        this.#productCode = productCode,
        this.designer = designer
    }
    costs = () => console.log(`The price of item ${this.#productCode} is ${this.price}`);
    isShipped = () => console.log(`This item is shipped worldwide`);
    isValuable = () => console.log(`This bag is valuable to collectors!`);
}

class Prada extends Bags {
    #productCode 
    constructor(brand, model, price, productCode, itBag) {
        super(brand, model),
        this.price = price, 
        this.#productCode = productCode,
        this.itBag = itBag
    }
    costs = () => console.log(`The price of item ${this.#productCode} is ${this.price}`);
    isShipped = () => console.log(`This item is shipped worldwide`);
    isBestSeller = () => console.log(`This bag is best-seller`);
}

class Chanel extends Bags {
    #productCode 
    constructor(brand, model, price, productCode, year) {
        super(brand, model),
        this.price = price, 
        this.#productCode = productCode,
        this.year = year
    }
    costs = () => console.log(`The price of item ${this.#productCode} is ${this.price}`);
    isShipped = () => console.log(`This item is shipped worldwide`);
    isVintage = () => console.log(`Vintage Chanel bags have better quality compared to knew`);
}
    
const hermes1 = new Hermes('Hermes', 'Birkin', '16.593 €', 19049582, 35);
const hermes2 = new Hermes('Hermes', 'Kelly', '11.154 €', 16952926, 32);
const celine1 = new Celine('Celine', 'Classic Box', '3.030 €', 17863708, 'Phoebe Philo');
const celine2 = new Celine('Celine', 'Triomphe', '2.802 €', 17351510, 'Hedi Slimane');
const prada1 = new Prada('Prada', 'Cleo', '2.300 €', 16175632, true);
const prada2 = new Prada('Prada', 'Logo-plaque mini', '920 €', 19062768, false);
const chanel1 = new Chanel('Chanel', 'Jumbo', '8.622 €', 19039475, 2014);
const chanel2 = new Chanel('Chanel', 'Mademoiselle', '10.859 €', 18954594, 1992);

hermes1.hasRequirements();
hermes2.handMade();
celine1.isValuable();
celine2.isShipped();
prada1.producedBy();
prada2.isBestSeller();
chanel1.costs();
chanel2.isVintage();

console.log(hermes1);
console.log(hermes2);
console.log(celine1);
console.log(celine2);
console.log(prada1);
console.log(prada2);
console.log(chanel1);
console.log(chanel2);
