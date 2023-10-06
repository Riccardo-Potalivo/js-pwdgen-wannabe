let nome = prompt("Quale è il tuo nome?");
let cognome = prompt("Quale è il tuo cognome?");
let colorePreferito = prompt("Quale è il tuo colore preferito?");
const numeroFisso = 21

let password =
`
    La tua password è ${nome}${cognome}${colorePreferito}${numeroFisso}
`

console.log(nome);

document.getElementById('text').innerHTML = password;