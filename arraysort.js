let fruits = ["Banana", "Pineapple", "Apple", "Carrot", "Mango"];
fruitUpdate = fruits.sort();
console.log(fruitUpdate);
fruits.reverse();
console.log(fruits);

myNumber = [23, 40, 10, 4, 50, 80];
myNumberUpdate = myNumber.sort(function(a,b){return(a-b)});
console.log(myNumberUpdate);
myNumber.sort(function(a, b){return(b-a)});
console.log(myNumber);