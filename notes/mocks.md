Fonction / jest.fn()

-> créer une fausse fonction contrôlable

ex: sendEmail("Hello") - on ne veut pas envoyer réellement un mail

TEST :
const sendEmail = jest.fn();
expect(sendEmail).toHaveBeenCalled();

//////////////////////////////////
Forcer un retour / mockReturnValue

-> forcer ce que la fonction retourne

const getAge = jest.fn();
getAge.mockReturnValue(42);

getAge(); // 42

//////////////////////////////////
Fake async succes - mockResolvedValue

-> simuler une Promise qui réussit

ex: return Promise.resolve("ok")

TEST :
fetchUser.mockResolvedValue({ name: "Paul" });

//////////////////////////////////
Fake async error - mockRejectedValue

-> simuler une Promise qui échoue

ex: return Promise.reject("Oops")

TEST :
fetchUser.mockRejectedValue(new Error("404"));

//////////////////////////////////
Espionner sans casser - jest.spyOn()

-> observer une vraie fonction sans la casser

TEST :
jest.spyOn(console, "log")
expect(console.log).toHaveBeenCalled();

//////////////////////////////////
Contrôler le temps - fake timers

-> simuler le passage du temps

TEST :
beforeEach(() => jest.useFakeTimers());
afterEach(() => jest.useRealTimers());
-> pour créer une "boucle" sur chaque test

jest.useFakeTimers();

jest.runAllTimers();

//////////////////////////////////
Nettoyage - clearAllMocks()

-> effacer la “mémoire” des mocks entre tests

TEST :
jest.clearAllMocks()
