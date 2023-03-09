const fruit = new Map();
fruit.set("apple", 500);
fruit.set("Pawpaw", 400);
fruit.set("Banana", 300);
fruit.set("Orange", 200);

console.log(fruit.get("apple"));
// console.log(fruit.delete("apple"));
console.log(fruit.size);
console.log(fruit.has("apple"));
console.log(fruit);

let text = "";
fruit.forEach(function(key,value){
    text += value + ' = ' + key;
})
console.log(text);