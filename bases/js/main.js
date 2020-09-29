//console.log('Mon message');
//console.error('Mon message erreur');

/*document.addEventListener('click', function() {
    alert ('MESSAGE');
});*/

const myButton = document.getElementById('bouton-bleu');
if(myButton != null) {
myButton.addEventListener('click', function() {
    const table = document.querySelector('table');
    table.style.display = 'none';
 //   alert('test');
});
}

//document.getElementsByClassName('btn');

/*myButton.addEventListener('click', function() {
    alert('test');
});
btns[0].addEventListener('click', function() {
    alert('MESSAGE');
});*/
