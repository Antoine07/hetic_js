
let a = 1;

function calcul() {
  // nouveau symbole A
  let A = 2 + a;

  console.log(A, "calcul");

  function sub_calcul() {
    let b = A + 1;

    console.log(b, "sub_calcul");
  }

  sub_calcul();
}

calcul();