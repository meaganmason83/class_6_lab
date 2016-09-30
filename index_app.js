'use strict';
//D.O.M
var parent = document.getElementById('parentElement');
var child = document.createElement('p');
child.textContent = 'Some words we want in our p element';
parent.appendChild(child);
