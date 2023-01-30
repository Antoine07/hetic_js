function swap(a, b, c) {
  let d = c;
  c = b;
  b = a;
  a = d;

  return [a, b, c];
}

let [u, i, v] = swap(1, 2, 3);

console.log(u, i, v);

// On peut assigner des variables en utilisant des tableaux 
let [a, b, c] = [1, 2, 3];

console.log(a, b, c);
