class Vehicle{
    constructor(type, brand, price) {
        this.type = type
        this.brand = brand
        this.price
    }
    getThis() {
        console.log(this)
    }
    getPrice(){
        return this.price
    }
}

const car1 = new Vehicle('Car', 'Honda', 500000)
const car2 = new Vehicle('Car', 'Toyota', 400000)
// car1.getThis();
// car2.getPrice();
// console.log(car2.getPrice())
// console.log(car2.getPrice())

const student = {
    name: 'Rahul Dravid',
    score: 10000,
    getScore: function(){
        console.log(this)
    },
    getScoreArrow: () => {
        console.log(this)
    }
}
student.getScore();
student.getScoreArrow();
console.log('ultimatethis', this)