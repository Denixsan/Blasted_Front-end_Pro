class Hamburger {
    constructor(hSize, hFilling, hAdditive) {
        this.additiveArray = [];
        this.hamburgerSize = hSize;
        this.hamburgerFilling = hFilling;
        this.hamburgerAdditive = hAdditive;
        console.log(`Size: ${this.hamburgerSize} `,
                    `Filling: ${this.hamburgerFilling} `,
                    `Additive: ${this.hamburgerAdditive} `);
         
    };
    addAddtive(hAdditive) {
        if ((hAdditive === `mayo` || hAdditive === `spice`) && this.hamburgerAdditive === undefined) {
            this.additiveArray.push(hAdditive);
            this.hamburgerAdditive = this.additiveArray.toString();
            console.log(`Size: ${this.hamburgerSize} `,
                        `Filling: ${this.hamburgerFilling} `,
                        `Additive: ${this.hamburgerAdditive} `);
        }
        else if (this.hamburgerAdditive !== undefined) {
            this.additiveArray.push(hAdditive);
            this.hamburgerAdditive = this.additiveArray.toString();
            console.log(`Size: ${this.hamburgerSize} `,
                        `Filling: ${this.hamburgerFilling} `,
                        `Additive: ${this.hamburgerAdditive} `);
        }
    }
    calculateCalories() {
        let calories = 0;
        if (this.hamburgerSize === `small`) {
            calories += 20;
        }
        if (this.hamburgerSize === `big`) {
            calories += 40;
        }
        if (this.hamburgerFilling === `cheese`) {
            calories += 20;
        }        
        if (this.hamburgerFilling === `salad`) {
            calories += 5;
        }   
        if (this.hamburgerFilling === `potato`) {
            calories += 10;
        }   
        if (this.hamburgerAdditive.includes(`mayo`)) {
            calories += 5;
        }
        console.log(`Calories: ${calories} calories`);
    }
    calculatePrice() {
        let price = 0;
        if (this.hamburgerSize === `small`) {
            price += 50;
        };
        if (this.hamburgerSize === `big`) {
            price += 100;
        };
        if (this.hamburgerFilling === `cheese`) {
            price += 10;
        };       
        if (this.hamburgerFilling === `salad`) {
            price += 20;
        };  
        if (this.hamburgerFilling === `potato`) {
            price += 15;
        };
        if (this.hamburgerAdditive.includes(`spice`)) {
            price += 15;
        };  
        if (this.hamburgerAdditive.includes(`mayo`)) {
            price += 20;
        };
        console.log(`Price: ${price} tugriks`);
    }
};

const hamburger1 = new Hamburger(`small`, `cheese`);
hamburger1.addAddtive(`mayo`);
hamburger1.calculateCalories();
hamburger1.calculatePrice();
hamburger1.addAddtive(`spice`);
hamburger1.calculatePrice();
const hamburger2 = new Hamburger(`big`, `salad`);
hamburger2.addAddtive(`mayo`);
hamburger2.calculateCalories();
hamburger2.calculatePrice();