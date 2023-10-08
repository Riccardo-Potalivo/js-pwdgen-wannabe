let nome = prompt("Quale è il tuo nome?");
let cognome = prompt("Quale è il tuo cognome?");
let colorePreferito = prompt("Quale è il tuo colore preferito?");
const numeroFisso = 21

let password =
`
    ${nome}${cognome}${colorePreferito}${numeroFisso}
`

console.log(nome);

document.getElementById("text").value = password;


function myFunction() {
    // Get the text field
    var copyText = document.getElementById("text");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }