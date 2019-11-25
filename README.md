# Gestion d'état avec des composants classes ou fonctions

Historiquement, avec ReactJS, nous pouvons définir nos composants sous forme de classes ou sous forme de fonctions.

La seule différence avant la version 16.8, c'est qu'il était impossible de gérer un état (state) dans un composant fonctionnel.

Depuis la version 16.8, sortie en Février 2019, il est possible de définir un composant sous forme de fonction avec un état, avec l'introduction des [**Hooks**](https://reactjs.org/docs/hooks-intro.html).

L'intérêt principal de cette fonctionnalité, pour notre gestion d'état, va être de pouvoir isoler les fonctions de gestion d'état dans notre composant.

Dans le projet, deux composants très simples sont définis : `ClassCounter` et `FunctionCounter`.

Le premier définit un composant avec un compteur, défini sous forme de classe.

Le second est identique mais défini sous forme de fonction.

## Composant classe

Dans notre composant classe, notre état se situe dans un attribut `state` hérité de la classe `React.Component`.

Nous pouvons donc l'initialiser dans le constructeur, puis le mettre à jour dans d'autres méthodes, en conservant son immutabilité par l'utilisation de la méthode `setState`.

Nous avons également accès aux méthodes du [cycle de vie d'un composant](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/), si nous voulons effectuer un appel à une API, etc...

## Composant fonctionnel

Dans le composant fonctionnel, nous utilisons le hook `useState` fourni par React.

Il s'agit d'une fonction qui va créer une variable d'état. Elle va nous retourner cette variable (ici nous l'avons appelée `counter`), ainsi qu'une fonction permettant de la mettre à jour (ici nous l'avons appelée `setCounter`). Tout ce qu'elle reçoit en argument est la valeur initiale de notre variable d'état (ici 0).

Il s'agit tout simplement de l'équivalent `this.state.counter` et `this.setState`, à la différence près que dans un composant fonctionnel, nous ne sommes pas dans une définition de classe. Ici, nous ne pourrons donc pas manipuler une instance de classe avec `this`.

>On peut créer plusieurs variables d'état avec plusieurs appels à `useState`

Un composant fonctionnel n'a pas de méthode `render` comme dans un composant sous forme de classe. Pour afficher notre composant, nous n'avons qu'à utiliser `return` avec son contenu.

On remarquera donc que dans le contenu retourné, nous pouvons utiliser notre méthode `setCounter` pour mettre à jour notre compteur.

Enfin, il est également possible d'utiliser le hook `useEffect` pour effectuer des traitements au changement d'une variable d'état.

Nous définissons la fonction à exécuter, et le moment où elle s'exécutera : le deuxième paramètre définit des "dépendances" : ici `counter`. Quand `counter` est mise à jour, la fonction s'exécute (nous ne faisons qu'un `console.log` donc ouvrez votre console).

On pourra donc définir plusieurs appels à au hook `useEffect`, suivant les mises à jour de nos variables d'état, et même tout simplement pour lancer un traitement au montage de notre composant, à la manière de la méthode `componentDidMount` dans un composant classe.

Plus d'infos sur `useEffect` [ici](https://reactjs.org/docs/hooks-effect.html).
