function Person(pName, pAge) {
    this.personName = pName;
    this.personAge = pAge;

    this.showPersonInfo = function () {
        console.log(`Name: ${this.personName}; Age: ${this.personAge}`);
    };
}

function Car(cBrand, cModel, cYear, cNumber) {
    this.carBrand = cBrand;
    this.carModel = cModel;
    this.carYear = cYear;
    this.carNumber = cNumber;

    this.setCarOwner = function (cOwner) {
        if (cOwner.personAge > 18) {
            this.carOwner = cOwner;
        }
        else {
            console.log(`Your age is less than 18. Get out!`);
        }
    };

    this.showCarInfo = function () {
        console.log(`Brand: ${this.carBrand}; Model: ${this.carModel}; Year: ${this.carYear}; Number: ${this.carYear};`);
        this.carOwner.showPersonInfo();
    };
}

const person1 = new Person(`Person1Name`, 16);
const person2 = new Person(`Person2Name`, 26);
const person3 = new Person(`Person3Name`, 36);

const car1 = new Car(`Nissan`, `Roque`, 2016, `AA0000AA`);
const car2 = new Car(`Mazda`, `3`, 2020, `AA1111AA`);
const car3 = new Car(`Subaru`, `Impreza`, 2023, `AA2222AA`);

car1.setCarOwner(person1);
console.log(`-----------`, car1, person1);

car1.setCarOwner(person2);
car2.showCarInfo();
console.log(`-----------`, car2, person2);

car1.setCarOwner(person3);
car2.showCarInfo();