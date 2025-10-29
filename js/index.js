console.log("Завдання 1");
const arrays = ["Mango", "Poly", "Kiwi", "Ajax"];
let result = "";
for(let i = 0; i < arrays.length; i += 1){
result += arrays[i]
}
console.log(result);

const joinArrays = arrays.join("");
console.log(joinArrays);

console.log("Завдання 2");
const cards = [
    "Карточка-1",
    "Карточка-2",
    "Карточка-3",
    "Карточка-4",
    "Карточка-5",
]
console.log(cards);

const cardToRemove = "Карточка-3";
const findIndex = cards.indexOf(cardToRemove)
cards.splice(findIndex, 1)
console.log(cards);

const CardToInsert = "Карточка-6"
cards.splice(5, 0, CardToInsert);
console.log(cards);

const CardToUpdate = "Карточка-4(new)";
cards.splice(2, 1, CardToUpdate)
console.log(cards);