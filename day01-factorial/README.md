# 📘 Énoncé + Explications théoriques : Factorielle

## ✅ Critères de qualité

- **Clarté** : Énoncé clair et précis, sans ambiguïté.
- **Tests** : Tests unitaires complets pour chaque fonction.
- **Performance** : Solutions optimisées pour la complexité temporelle et spatiale.
- **Documentation** : Commentaires explicatifs et lisibilité du code.

---

## 📜 Énoncé

Écrire une fonction `factorial(n)` qui calcule la factorielle d'un nombre entier positif `n`.

La factorielle de `n` (notée `n!`) est le produit de tous les entiers positifs jusqu'à `n`.

### Exemples :

- `factorial(5)` doit retourner `120` (5 × 4 × 3 × 2 × 1)
- `factorial(0)` doit retourner `1` (par convention)

---

## 📚 Explications théoriques

La factorielle est une fonction mathématique qui croît très rapidement avec la valeur de `n`. Elle est souvent utilisée en combinatoire, en analyse, et dans de nombreux domaines de l'informatique théorique.

### Propriétés :

- `n! = n × (n - 1)!`
- `0! = 1` (par définition)
- Utilisée dans les permutations, combinaisons, séries de Taylor, etc.

