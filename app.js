var userName = location.pathname
var elements = document.getElementsByClassName('scrolling-tabs-container')
fetch(`https://gitlab.com/users${userName}/calendar.json`)
	.then(response => {
		response.json().then( json => {
			const contributions = Object.values(json).reduce(function(sum, elem){return sum+elem}, 0)
			const p = document.createElement("p");
			const text1 = document.createTextNode(`${contributions} contributions in this year`);
			p.appendChild(text1);
			elements[0].appendChild(p);
		})
	})

