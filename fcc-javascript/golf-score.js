const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes){
  if (strokes === 1) {
    return names[0]
  } else if (par >= strokes + 2) {
     return names[1]
  } else if (par === strokes + 1) {
     return names[2]
  } else if (par === strokes) {
     return names[3]
  } else if (par === strokes - 1) {
     return names[4]
  }  else if (par === strokes - 2) {
     return names[5]
  } else if (par === strokes - 4) {
     return names[6]
  }
}
console.log(golfScore(1,1));
console.log(golfScore(4,2));
console.log(golfScore(3,2));
console.log(golfScore(3,3));
console.log(golfScore(3,4));
console.log(golfScore(3,5));
console.log(golfScore(3,7));