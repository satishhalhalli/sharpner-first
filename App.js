

const helloWorldDiv = document.createElement('div');
helloWorldDiv.setAttribute('id', 'hello-world');
helloWorldDiv.setAttribute('class', 'card card-body');

helloWorldDiv.setAttribute('class', 'title');
var newDivText=document.createTextNode('Hello world');
helloWorldDiv.appendChild(newDivText);



var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
container.insertBefore(helloWorldDiv,h1);


const item1 = document.querySelector('#items li:first-child');
const helloDiv = document.createElement('div');
helloDiv.setAttribute('class', 'hello');
helloDiv.textContent = 'Hello';
item1.parentNode.insertBefore(helloDiv, item1);