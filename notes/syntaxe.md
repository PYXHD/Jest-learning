//////////////////////////////////
describe()

définition :
permet de regrouer plusieurs tests liés ensemble

exemple :
describe("Fonction addition", () => {
test("1 + 1 = 2", () => {
expect(1 + 1).toBe(2);
});
});

//////////////////////////////////
test() / it()

définition :
permet de déclarer un test + une fonction contenant les assertions

exemple :
test("2 + 3 = 5", () => {
expect(2 + 3).toBe(5);
});

it("multiplie 2 par 3", () => {
expect(2 \* 3).toBe(6);
});

//////////////////////////////////
toBe()

définition :
compare des valeurs primitives (===)
-> à éviter pour comparer des objets.

exemple:
expect(5).toBe(5);
expect("hello").toBe("hello");

//////////////////////////////////
toBeCloseTo()

définition :
compare des nombres à virgule flottante avec une tolérance
-> utile pour éviter les erreurs de précision en JS
-> on peut préciser la précision (nombre de décimales) en second argument

exemple :
expect(0.1 + 0.2).toBeCloseTo(0.3); // précision par défaut
expect(0.1 + 0.2).toBeCloseTo(0.3, 5); // précision à 5 décimales

//////////////////////////////////
toEqual()

définition :
compare le contenu des objets ou tableaux (comparaison profonde)

exemple :
expect({ name: "John" }).toEqual({ name: "John" });
expect([1, 2, 3]).toEqual([1, 2, 3]);

//////////////////////////////////
toBeTruthy() / toBeFalsy()

définition :
vérifie si une valeur est "truthy" ou "falsy" en JS
-> utile quand on ne veut pas tester une valeure exacte mais son comportement booléen

exemple :
expect(true).toBeTruthy();
expect(1).toBeTruthy();
expect(0).toBeFalsy();
expect(null).toBeFalsy();

//////////////////////////////////
toBeNull() / toBeUndefined()

définition :
vérifie si une valeur est null ou undefined

exemple :
expect(null).toBeNull();

let x;
expect(x).toBeUndefined();

//////////////////////////////////
toContain()

définition :
vérifie qu'un tableau ou une string contient une valeur

exemple :
expect([1, 2, 3]).toContain(2);
expect("hello world").toContain("world");

//////////////////////////////////
toHaveLength()

définition :
vérifie qu'un itérable contient une longueur précisée
-> plus lisible que vérifier .length manuellement

exemple :
expect([1, 2, 3]).toHaveLength(3);
expect("chat").toHaveLength(4);

//////////////////////////////////
toMatch()

définition :
test une string avec une regex
-> très utile pour validation email, format, etc...

exemple :
expect("hello@gmail.com").toMatch(/@gmail\.com$/);

//////////////////////////////////
toHaveProperty()

définition :
vérifie qu'un objet possède une propriété (même imbriquée)

exemple :
const user = {
name: "Alice",
address: {
city: "Paris"
}
};

expect(user).toHaveProperty("name");
expect(user).toHaveProperty("address.city");

//////////////////////////////////
not

définition :
inverse le matcher

exemple :
expect(5).not.toBe(3);
expect([1, 2]).not.toContain(3);

//////////////////////////////////
beforeEach()

définition :
exécuté avant chaque test dans un describe

exemple :
let compteur;

beforeEach(() => {
compteur = 0;
});

test("compteur démarre à 0", () => {
expect(compteur).toBe(0);
});

//////////////////////////////////
toThrow()

définition :
vérifie qu'une fonction lance une erreur
-> on doit passer une fonction à expect, et non le résultat de son exécution
-> sinon le test plantera avant que Jest ne puisse la capturer

exemple :
function erreur() {
throw new Error("Problème !");
}

test("doit lancer une erreur", () => {
expect(() => erreur()).toThrow();
});

//////////////////////////////////
resolves / rejects

définition :
permet de tester la valeur résolue / rejetée d'une Promise

exemple :
function additionAsync(a, b) {
return Promise.resolve(a + b);
}
test("addition async fonctionne", async () => {
await expect(additionAsync(2, 3))
.resolves
.toBe(5);
});

function erreurAsync() {
return Promise.reject(new Error("Problème !"));
}

test("doit rejeter une erreur", async () => {
await expect(erreurAsync())
.rejects
.toThrow("Problème !");
});
