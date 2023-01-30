const PRECISION = 100;

function ttc(price, tva = .2){
    const p = parseFloat(price);
    const t = parseFloat(tva);

    if(isNaN(p) || isNaN(t)){
        console.error("Erreur de type sur le price ou la tva");

        return; // j'arrête le script
    }

    // deux chiffres après la virgule pour éviter le hard coding crée des constantes PRECISION
    return Math.floor( p * ( 1 + t ) * PRECISION) / PRECISION ;
}

// avec un littéral on peut avoir des paramètres nommés
console.log( ttc(100, .3) );

console.log( ttc( 100) ) ;


