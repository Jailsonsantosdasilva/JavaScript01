function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function(){
    this.online = true
    console.log(this.email, "has logged in")
}

User.prototype.loginout = function(){
    this.online = true
    console.log(this.email, "has logged out")
}

var userOne = new User("seiii", "id")
var userTwo = new User("seiii", "id")

console.log(userOne)
userTwo.login()