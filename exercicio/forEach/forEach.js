const users = [
    {name: 'rodolfo', age:33, contact: '(19) 94343-3434'},
    {name: 'paulo', age:21, contact: '(12) 94343-3434'},
    {name: 'aline', age:40, contact: '(19) 94343-3434'},
    {name: 'Maria', age:12, contact: '(19) 94343-3434'},
]

 

users.forEach(function(item, index){
  if(item.age < 18){
console.log(`O clienter ${item.name}, posição ${index} é menor de idade`)
  }
});