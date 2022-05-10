// Test Scripts

//Create a paragraph tag
var paragraph = document.createElement('P');

//Add text to paragraph
paragraph.textContent = 'The DOM is the bomb!';

//Add text to body
document.body.appendChild(paragraph);



//Part two of DOM Project

//Create a DIV Element
var div = document.createElement('DIV');
// div.style.backgroundColor = 'rgb(200, 300, 100)';

//Set Height of Element
div.style.height = '100vh';

//Append Element to DOM
document.body.appendChild(div);
div.addEventListener('mousemove', function(event) {
    console.log(event);
    var x = event.clientX;
    var y = event.clientY;
    div.textContent = x + ', ' + y;
    div.style.backgroundColor = 'rgb(' + x + ', ' + y + ', 100)';
});
