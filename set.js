const letter = new Set(["a","b","c","d","a"]);
letter.add("e");
let a ="f";
// letter.delete("a");
console.log (letter.size);
let text="";
letter.forEach(function(value){
    text += value;
})
console.log(text);
console.log(letter.values());

for(let x of letter.values()){
    text += x + " <br>";
}
console.log(text)