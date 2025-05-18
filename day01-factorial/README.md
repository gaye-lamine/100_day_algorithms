//  Énoncé + explications théoriques : factorielle
[]: # | **Clarté** | Énoncé clair et précis, sans ambiguïté. |
[]: # | **Tests** | Tests unitaires complets pour chaque fonction. |
[]: # | **Performance** | Solutions optimisées pour la complexité temporelle et spatiale. |
[]: # | **Documentation** | Commentaires explicatifs et lisibilité du code. |
[]: # 
[]: # ## 📜 Énoncé
[]: # 
[]: # Écrire une fonction `factorial(n)` qui calcule la factorielle d'un nombre entier positif `n`.
[]: # 
[]: # La factorielle de `n` (notée `n!`) est le produit de tous les entiers positifs jusqu'à `n`.
[]: # 
[]: # Par exemple:
[]: # 
[]: # - `factorial(5)` doit retourner `120` (5 * 4 * 3 * 2 * 1)
[]: # - `factorial(0)` doit retourner `1` (par convention)
[]: # 
[]: # ## 📚 Explications théoriques
[]: # 
[]: # La factorielle est une fonction mathématique qui croît très rapidement. Elle est souvent utilisée dans les calculs combinatoires et les probabilités.
[]: # 
[]: # La formule de la factorielle est:
[]: # 
[]: # - `n! = n * (n-1)!` pour `n > 0`
[]: # - `0! = 1` par convention
[]: # 
[]: # ## 💡 Conseils
[]: # 
[]: # - Pensez à utiliser la récursivité ou l'itération pour résoudre ce problème.
[]: # - Assurez-vous de gérer le cas où `n` est égal à `0`.
[]: # - Testez votre fonction avec des valeurs limites (comme `0` et `1`) pour vous assurer qu'elle fonctionne correctement.
[]: # 
[]: # ## 📊 Tests
[]: # 
[]: # - `factorial(5)` doit retourner `120`
[]: # - `factorial(0)` doit retourner `1`
[]: # - `factorial(1)` doit retourner `1`
[]: # - `factorial(10)` doit retourner `3628800`
[]: # 
[]: # ## 🧪 Exemples de tests
[]: # 
[]: # ```javascript
[]: # console.log(factorial(5)); // 120
[]: # console.log(factorial(0)); // 1
[]: # console.log(factorial(1)); // 1
[]: # console.log(factorial(10)); // 3628800
