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
    static SIZE_SMALL = `small`;
    static SIZE_BIG = `big`;
    static FILLING_CHEESE = `cheese`;
    static FILLING_SALAD = `salad`;
    static FILLING_POTATO = `potato`;
    static ADDITIVE_MAYO = `mayo`;
    static ADDITIVE_SPICE = `spice`;
    addAddtive(hAdditive) {
        if ((hAdditive === `mayo` || hAdditive === `spice`) && this.hamburgerAdditive === undefined) {
            this.additiveArray.push(hAdditive);
            this.hamburgerAdditive = this.additiveArray.join(`, `);
            console.log(`Size: ${this.hamburgerSize} `,
                        `Filling: ${this.hamburgerFilling} `,
                        `Additive: ${this.hamburgerAdditive} `);
        }
        else if (this.hamburgerAdditive !== undefined) {
            this.additiveArray.push(hAdditive);
            this.hamburgerAdditive = this.additiveArray.join(`, `);
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

const hamburger1 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.FILLING_CHEESE);
hamburger1.addAddtive(Hamburger.ADDITIVE_MAYO);
hamburger1.calculateCalories();
hamburger1.calculatePrice();
hamburger1.addAddtive(Hamburger.ADDITIVE_SPICE);
hamburger1.calculatePrice();
const hamburger2 = new Hamburger(Hamburger.SIZE_BIG, Hamburger.FILLING_SALAD);
hamburger2.addAddtive(Hamburger.ADDITIVE_MAYO);
hamburger2.calculateCalories();
hamburger2.calculatePrice();