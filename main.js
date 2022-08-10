// Examine the document

console.dir(document);
console.log(document.referrer);
 console.log(document.domain);


// Get Element

console.log(document.getElementById('item').innerHTML);

console.log(document.getElementById('main-header'));
var header = document.getElementById('add');
 header.textContent = 'hello';

var headerTitle = document.getElementById('item');
 headerTitle.textContent = 'item header';
headerTitle.style.color = 'blue';
 console.log(headerTitle);

 