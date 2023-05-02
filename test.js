let phoneArray = [];
    function Account(index, isActive, balance, name, gender, phone, address) {
        this.personIndex = index;
        this.personIsActive = isActive;
        this.personBalance = balance;
        this.personName = name;
        this.personGender = gender;
        this.personPhone = phone;
        this.personAddress = address;
    
        this.showPersonInfo = function () {
            if (this.personBalance > 2000.00) {
            phoneArray.push(this.personPhone);
            console.log(`Index: ${this.personIndex}; isActive: ${this.personIsActive}; Balance: $${this. personBalance}; 
            Name: ${this.personName}; Gender: ${this.personGender}; Phone: ${this. personPhone};
            Address: ${this.personAddress};`);
            }

        };
    }

    const person1 = new Account(0, true, 2226.60, "Eugenia Sawyer", "female", "+1 (840) 583-3207", "949 John Street, Rose, Puerto Rico, 1857");
    const person2 = new Account(1, true, 2613.77, "Pauline Gallegos", "female", "+1 (985) 593-3328", "328 Greenpoint Avenue, Torboy, North Dakota, 6857");
    const person3 = new Account(2, false, 3976.41, "Middleton Chaney", "male", "+1 (995) 591-2478", "807 Fleet Walk, Brutus, Arkansas, 9783");
    const person4 = new Account(3, true, 1934.58, "Burns Poole", "male", "+1 (885) 559-3422", "730 Seba Avenue, Osage, Alabama, 6290");
    const person5 = new Account(4, true, 3261.65, "Mcfadden Horne", "male", "+1 (942) 565-3988", "120 Scholes Street, Kirk, Michigan, 1018");
    const person6 = new Account(5, false, 1790.56, "Suzette Lewis", "female", "+1 (837) 586-3283", "314 Dunne Place, Bawcomville, Guam, 9053");

    person1.showPersonInfo();
    person2.showPersonInfo();
    person3.showPersonInfo();
    person4.showPersonInfo();
    person5.showPersonInfo();
    person6.showPersonInfo();
    console.log(phoneArray);