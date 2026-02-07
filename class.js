/**
 * class ---> template
 * 
 * object
 * 
 * 
 */

class Player {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.location = 'Bangladesh'
        // console.log('calling the constructor method', name)
    }
    goal(){
        console.log('score a goal')
    }
    getTeamName(){
        return 'Borsa'
    }
}
const Player1 = new Player('Tom Brady', 33)
const Player2 = new Player('O Shanto', 11)
// Player.goal()
console.log(Player1 instanceof Player)
console.log(Player2)