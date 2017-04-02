function setText(selector, text) {
	/*
		`selector` is string with CSS-like selector
		`text` - is just string with text we want to change
	*/
var tagP = document.querySelector(selector);
	tagP.innerText = text;
	// Write your code here
}


function setTextAll(selector, text) {
	var items =  document.querySelectorAll(selector);
	items.forEach(function(element) {
		element.innerText = text
	}, this);
	// Write your code here
}


setText("p", "wasn't that hard, yeah ?");
setTextAll("div .block a", "or was it ?");