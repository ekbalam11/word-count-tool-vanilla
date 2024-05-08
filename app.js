// Buena suerte
const  input = document.querySelector('#text');

input.addEventListener('input', function (event){
    let phraseLength = event.target.value.length;
    console.log(phraseLength);

    document.querySelector('#text-length').textContent = phraseLength;
});