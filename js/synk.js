var elements = document.getElementsByTagName('p');

for (var i = 0; i < elements.length; i++) {
	elements[i].setAttribute("y", elements[i].style.top.substring(0, elements[i].style.top.length-1));
	elements[i].setAttribute("x", elements[i].style.left.substring(0, elements[i].style.left.length-1));
	elements[i].style.fontSize = (elements[i].getAttribute('z'))+"em";
}

galaxy = function() {
	var elements = document.getElementsByTagName('p');
	document.getElementById("scroll").style.color = "transparent";
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.top = 'calc('+elements[i].getAttribute('y')+'% - '+((elements[i].getAttribute('z')-1)*document.body.scrollTop)+'px)';
	}
}

smart = function(event) {
	var elements = document.getElementsByTagName('p');
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.left = 'calc( '+elements[i].getAttribute('x')+'% + '+(window.innerWidth/2-event.clientX)/30*(elements[i].getAttribute("z")-1)+'px )';
		elements[i].style.top = 'calc('+elements[i].getAttribute('y')+'% - '+(window.innerHeight/2-event.clientY)/-30*(elements[i].getAttribute("z")-1)+'px - '+((elements[i].getAttribute('z')-1)*document.body.scrollTop)+'px )';
	}
}
