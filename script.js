function randomNumber(){
number = Math.floor(Math.random()*102)+1;
return number;	
}
function quoteMachine(){
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
	if (xhr.readyState===4){
		var quotes = JSON.parse(xhr.responseText);
		console.log(quotes);
		console.log(quotes[5].name)
			rnd=randomNumber();
					console.log(quotes[rnd].name)

	document.getElementById("quotebox").innerHTML="<q>"+quotes[rnd].quote+"</q> by "+quotes[rnd].name;
	}
};
xhr.open('get', 'https://gist.githubusercontent.com/dmakk767/9375ff01aff76f1788aead1df9a66338/raw/491f8c2e91b7d3b8f1c8230e32d9c9bc1a1adfa6/Quotes.json%2520');
xhr.send();
};
quoteMachine();