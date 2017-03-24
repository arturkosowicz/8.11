function clickFunction() {
    var li = document.getElementsByTagName('li').length;
    list.innerHTML += '<li>item ' + li + '</li>';
}

var add = document.getElementById('addElem');
var list = document.getElementById('list');

add.addEventListener('click', clickFunction);