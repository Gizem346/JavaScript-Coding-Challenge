const inputt = document.querySelector("#input_id");
//const button = document.querySelector("#button_id");

document.querySelector("#button_id").addEventListener("click", reverseString);


let wordlist = []

function reverseString() {
    console.log(inputt.value);
    wordlist = inputt.value.split("")
    wordlist.reverse();
    document.querySelector("#output").innerText = wordlist.join("");
}
console.log(wordlist);




