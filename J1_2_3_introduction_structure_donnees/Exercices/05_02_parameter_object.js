function myFunc({ a, b, c }, tva = 0.1) {
  console.log(a, b, c, tva);
}


myFunc({ a : 1, b: 3, c : 4});
myFunc({ a : 1, b: 3, c : 4}, .3);
myFunc({ a : 1, b: 3, c : 4}, .5);

// qu'importe la place des paramètres avec un littéral (objet)
myFunc({ c: 4, b : 3, a : 1}, .3);
myFunc({ b : 3, c: 4,  a : 1 }, .3);