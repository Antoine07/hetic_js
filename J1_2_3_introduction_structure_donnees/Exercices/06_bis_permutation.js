// On peut assigner des variables en utilisant des tableaux
let [a, b, c] = [1, 2, 3];

[c, a, b] = [a, b, c];

console.log(a, b, c);

function permutation(a, b, c){
    [c, a, b] = [a, b, c];

    return {a, b, c};
}

console.log(permutation(1, 2, 3));