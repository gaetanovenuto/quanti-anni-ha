const currentTime = new Date();
console.log(currentTime);

const currentYear = currentTime.getFullYear();
console.log(currentYear);

const userYear = parseInt(prompt('Inserisci il tuo anno di nascita'));

const userAge = currentYear - userYear;
console.log('L\'utente ha:', userAge, 'anni');

const centenaryMissing = 100 - userAge;

console.log('Per raggiungere i 100 anni, all\'utente mancano:', centenaryMissing, 'anni.');