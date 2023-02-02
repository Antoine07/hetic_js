/**
 * 1. Soit le point A suivant, calculez la distance de ce point à l'ensemble de chaques points de la liste positions. Vous donnerez les résultats dans un nouveau tableau distances.
 */

const A = [8.3, 7.5];
const positions = [[1, 1], [2, 2], [3, 4.5], [0, 9]];
const distances = [];

const [Ax, Ay] = A;
const PRECISION = 100;

for (const [x, y] of positions) {

    distances.push(
        { point: [x, y], distance: Math.floor(Math.sqrt((Ax - x) ** 2 + (Ay - y) ** 2) * PRECISION) / PRECISION }
    );
}

// 2. Trouvez le point le plus éloigné du point A.

let pMax = {p : null, d : 0};
for(const {point, distance} of distances){

    if(distance > pMax.d) {pMax.d = distance; pMax.p = point};
}

console.log(pMax);

console.log(distances);

/*
 * Solution Michel Cadennes
 */

let distance = (x, y) => Math.floor(Math.sqrt((Ax - x) ** 2 + (Ay - y) ** 2) * PRECISION) / PRECISION

let buildDistance = ([x, y]) => {
    return {
        point: [x, y],
        distance: distance(x, y)
    }
}

let distances = positions
    .map(buildDistance);

positions
    .map(buildDistance)
    .reduce((acc, curr) => curr.distance > acc.distance ? curr : acc, {distance:0})
