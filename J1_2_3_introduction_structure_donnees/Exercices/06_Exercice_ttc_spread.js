const PRECISION = 100;

function sumTTC(number1, number2, number3, tva = 0.2) {
  const n1 = parseFloat(number1);
  const n2 = parseFloat(number2);
  const n3 = parseFloat(number3);
  const t = parseFloat(tva);

  if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(t)) {
    console.error("Erreur de type sur le price ou la tva");

    return; // j'arrête le script
  }

  // deux chiffres après la virgule pour éviter le hard coding crée des constantes PRECISION
  return Math.floor((n1 + n2 + n3) * (1 + t) * PRECISION) / PRECISION;
}

console.log(sumTTC(...[100, 120, 1245.89]));