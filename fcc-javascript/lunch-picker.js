let lunches = [];

function addLunchToEnd(arr, str) {
  arr.push(str);
  console.log(str + " added to the end of the lunch menu.");
  return arr;
}

console.log(addLunchToEnd(lunches, "Tacos"));
console.log(addLunchToEnd(["Pizza", "Tacos"], "Burger"));


function addLunchToStart(arr, str) {
  arr.unshift(str);
 console.log(str + " added to the start of the lunch menu.");
  return arr;
}

function removeLastLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  }
  let removedItem = arr.pop();
  console.log(removedItem + " removed from the end of the lunch menu.");
  return arr
}

function removeFirstLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  }
  let removedFirstItem = arr.shift();
  console.log(removedFirstItem + " removed from the start of the lunch menu.");
  return arr
}

function getRandomLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches available.");
  }
  let randomIndex = Math.floor(Math.random() * arr.length);
  let randomLunch = arr[randomIndex];
  console.log("Randomly selected lunch: " + randomLunch);
}

function showLunchMenu(arr) {
  if (arr.length === 0) {
    console.log("The menu is empty.");
  }
  console.log("Menu items: " + arr.join(", "));
}