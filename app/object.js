//Access html;
document.getElementById('div1').querySelector('p').innerHTML = 'Hej<br>da';
document.getElementById('div1').querySelector('p').textContent = "tja";

//Object
var dog = {name : 'buddy', color : 'gold', bark : function(){console.log('woof')}}

console.log(dog.bark())

//Array
var points = [5,2,6]
console.log(points)

const f = "trying babel";

console.log([1,2,3].map(n => n+1));