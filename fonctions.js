// Fonctions de manipulation de chaînes de caractères

// Inverse une chaîne de caractères.
function inverserChaine(chaine) {
  let resultat = "";

  for (let i = chaine.length - 1; i >= 0; i--) {
    resultat += chaine[i];
  }

  return resultat;
}

// Compte le nombre de caractères dans une chaîne.
function compterCaracteres(chaine) {
  return chaine.length;
}

// Met la première lettre de chaque mot en majuscule.
function mettreMotsEnMajuscules(phrase) {
  const mots = phrase.split(" ");
  let resultat = [];

  for (let i = 0; i < mots.length; i++) {
    const mot = mots[i];
    resultat.push(mot.charAt(0).toUpperCase() + mot.slice(1));
  }

  return resultat.join(" ");
}

// Fonctions de tableau

// Trouve le plus grand nombre dans un tableau.
function trouverMaximum(tableau) {
  let maximum = tableau[0];

  for (let i = 1; i < tableau.length; i++) {
    if (tableau[i] > maximum) {
      maximum = tableau[i];
    }
  }

  return maximum;
}

// Trouve le plus petit nombre dans un tableau.
function trouverMinimum(tableau) {
  let minimum = tableau[0];

  for (let i = 1; i < tableau.length; i++) {
    if (tableau[i] < minimum) {
      minimum = tableau[i];
    }
  }

  return minimum;
}

// Calcule la somme des nombres d'un tableau.
function sommeTableau(tableau) {
  let somme = 0;

  for (let i = 0; i < tableau.length; i++) {
    somme += tableau[i];
  }

  return somme;
}

// Garde seulement les éléments qui respectent une condition.
function filtrerTableau(tableau, condition) {
  let resultat = [];

  for (let i = 0; i < tableau.length; i++) {
    if (condition(tableau[i])) {
      resultat.push(tableau[i]);
    }
  }

  return resultat;
}

// Fonctions mathématiques

// Calcule la factorielle d'un nombre entier positif.
function factorielle(nombre) {
  let resultat = 1;

  for (let i = 1; i <= nombre; i++) {
    resultat *= i;
  }

  return resultat;
}

// Vérifie si un nombre est premier.
function estPremier(nombre) {
  if (nombre < 2) {
    return false;
  }

  for (let i = 2; i < nombre; i++) {
    if (nombre % i === 0) {
      return false;
    }
  }

  return true;
}

// Génère les premiers termes de la suite de Fibonacci.
function fibonacci(nombreDeTermes) {
  let suite = [];

  for (let i = 0; i < nombreDeTermes; i++) {
    if (i === 0) {
      suite.push(0);
    } else if (i === 1) {
      suite.push(1);
    } else {
      suite.push(suite[i - 1] + suite[i - 2]);
    }
  }

  return suite;
}

// Exemples d'utilisation
const nombres = [4, 12, 7, 1, 9];

console.log(inverserChaine("bonjour")); // ruojnob
console.log(compterCaracteres("Bonjour")); // 7
console.log(mettreMotsEnMajuscules("bonjour tout le monde")); // Bonjour Tout Le Monde

console.log(trouverMaximum(nombres)); // 12
console.log(trouverMinimum(nombres)); // 1
console.log(sommeTableau(nombres)); // 33
console.log(filtrerTableau(nombres, function (nombre) {
  return nombre > 5;
})); // [12, 7, 9]

console.log(factorielle(5)); // 120
console.log(estPremier(13)); // true
console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
