class Hamburger {
    constructor(base, toppingsList, spicesList = []) {
        this.base = base;
        this.toppingsList = toppingsList;
        this.spicesList = spicesList;
        this.totalCost = 0
        this.totalCalories = 0
        this.getTotalCost()
        this.getTotalCalories()
    }

    getTotalCost() {
        this.totalCost += this.base.price
        this.toppingsList.forEach(item => this.totalCost += item.price)
        this.spicesList.forEach(item => this.totalCost += item.price)
    }

    getTotalCalories() {
        this.totalCalories += this.base.calories
        this.toppingsList.forEach(item => this.totalCalories += item.calories)
        this.spicesList.forEach(item => this.totalCalories += item.calories)
    }

    addSpice(spice) {
        if (this.spicesList.indexOf(spice) === -1) {
            this.spicesList.push(spice)
            this.totalCost += spice.price
            this.totalCalories += spice.calories
        } else {
            console.log(`Специя ${spice.name} уже добавлена`)
        }
    }

    delSpice(spice) {
        if (this.spicesList.indexOf(spice) === -1) {
            console.log(`Специи ${spice.name} нет в гамбургере`)
        } else {
            this.spicesList.splice(this.spicesList.indexOf(spice), 1)
            this.totalCost -= spice.price
            this.totalCalories -= spice.calories
        }
    }

    addTopping(topping) {
        if (this.toppingsList.indexOf(topping) === -1) {
            this.toppingsList.push(topping)
            this.totalCost += topping.price
            this.totalCalories += topping.calories
        } else {
            console.log(`Начинка ${topping.name} уже добавлена`)
        }
    }

    delTopping(topping) {
        if (this.toppingsList.length === 1) {
            console.log(`В гамбургере должна быть хотя бы одна начинка`)
        } else if (this.toppingsList.indexOf(topping) === -1) {
            console.log(`Специи ${topping.name} нет в гамбургере`)
        } else {
            this.toppingsList.splice(this.toppingsList.indexOf(topping), 1)
            this.totalCost -= topping.price
            this.totalCalories -= topping.calories
        }
    }
}

class HamburgerBase {
    constructor(size, price, calories) {
        this.size = size;
        this.price = price;
        this.calories = calories;
    }
}

class Stuffing {
    constructor(name, price, calories) {
        this.name = name;
        this.price = price;
        this.calories = calories;
    }
}

class Topping extends Stuffing {
    constructor(name, price, calories) {
        super(name, price, calories);
    }
}

class Spice extends Stuffing {
    constructor(name, price, calories) {
        super(name, price, calories);
    }
}

let smallHamburgerBase = new HamburgerBase('small', 50, 20);
let bigHamburgerBase = new HamburgerBase('small', 100, 40);
let cheese = new Topping('cheese', 10, 20)
let salad = new Topping('salad', 20, 5)
let potato = new Topping('potato', 15, 10)
let pepper = new Spice('pepper', 15, 0)
let mayonnaise = new Spice('mayonnaise', 20, 5)

let hamb = new Hamburger(smallHamburgerBase, [cheese, salad], [pepper, mayonnaise])
