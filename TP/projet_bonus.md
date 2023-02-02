# Projet

Voyez le wireframe ci-après pour la réalisation du projet.

Vous utiliserez l'API suivante pour récupérer les posts :

**https://jsonplaceholder.typicode.com**

Dans cette version, nous cherchons à afficher une page de profil pour un utilisateur donné.
Le but est d'afficher des statistiques sur l'activité de l'utilisateur en question.
Pour cela :

1. Lors du chargement de la page, on enverra une requête vers l'API pour récupérer la liste des utilisateurs et l'afficher dans la page (sous forme de liste déroulante par exemple ou de boutons radio)
2. Ensuite, lorsque je sélectionne un utilisateur, l'application devra envoyer de nouvelles requêtes pour récupérer les données relatives à cet utilisateur : posts, commentaires, tâches. Ainsi, nous allons pouvoir afficher des blocs d'information dans la page.
    - un bloc contenant les posts de l'utilisateur
    - un bloc contenant le nombre de commentaires pour chaque post ainsi que la moyenne des commentaires par post
    - un bloc contenant la liste des 10 mots les plus utilisés dans les posts de l'utilisateur
    - un bloc affichant le nombre de tâches en cours et de tâches terminées pour l'utilisateur
    - la distance qui sépare l'utilisateur des autres utilisateurs (éventuellement les plus « proches »)
3. Insérez un  bouton qui permette d'afficher le messages chiffrés ou en clair.

Indications :
- Vous utiliserez le code d'exemple suivant pour faire cette petite application. Vous serez sans doute amenés à créer des prévoir des éléments supplémentaires pour les diférents blocs.
- Utilisez l'API HTML pour la manipulation du DOM
- Une fois que vous avez récupéré la liste des utilisateurs, créez des objets pour conserver le données de amnière pérenne et créez une collection à cet effet.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profil Utilisateur</title>
    <style>
        html {
            font-family: sans-serif;
        }
        body {
            width: 50%;
            max-width: 800px;
            min-width: 480px;
            margin: 0 auto;
        }

        .result {
            color: palevioletred;
            padding: 3px;
        }

        .warning {
            color: purple;
            padding: 3px;
        }
    </style>
</head>

<body>
    <h1>Profil de l'utilisateur</h1>
    <p>Formulaire de saisie</p>
    <div class="form">
        <label for="post">Id de l'utilisateur): </label>
        <input type="text" id="post" class="post">
        <input type="submit" value="Calculer" class="submitPost">
    </div>
    <div id="statistiques">
    </div>
    <script>
        let elInput = document.querySelector('.post');
        let elSubmit = document.querySelector('.submitPost');
        let message = document.querySelector('.message');

        // 1.
        let value = '';

        function eventInput(event) {

        }

        elInput.addEventListener('input', eventInput);

        // 2.
        function onClick(event) {
        }

        elSubmit.addEventListener('click', onClick);
    </script>
</body>
</html>
```

Wireframe

```txt

Nombre de post(s) : [8]

titre 1

titre 2

...

Le nombre de "e"

[Calculer]

8

```
