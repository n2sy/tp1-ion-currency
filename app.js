let intituleValue = document.getElementById('intitule');
let sommeValue = document.getElementById('somme');

let btnAjouter = document.getElementById('btnAdd');



btnAjouter.addEventListener('click', () => {
    console.log(intituleValue.value, sommeValue.value);
    if (!intituleValue.value.trim().length && !sommeValue.value.trim().length)
        alert('Probleme')
});