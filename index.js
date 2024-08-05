var cats = ["Milo", "Otis", "Garfield"];

// Destructive Methods
function appendCat(cat) {
  cats.push(cat);
}

function prependCat(cat) {
  cats.unshift(cat);
}

function removeLastCat() {
  cats.pop();
}

function removeFirstCat() {
  cats.shift();
}

// Nondestructive Methods
function getCatsWithNewCatAtEnd(cat) {
  return [...cats, cat];
}

function getCatsWithNewCatAtBeginning(cat) {
  return [cat, ...cats];
}

function getCatsWithoutLastCat() {
  return cats.slice(0, -1);
}

function getCatsWithoutFirstCat() {
  return cats.slice(1);
}
