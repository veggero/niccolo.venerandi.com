gradients = function(event) {
	var elements = document.getElementsByClassName('bordered');

	for (var i = 0; i < elements.length; i++) {
		if (elements[i].getAttribute('toTxt')=='true') {
			elements[i].style["border-image"] = '-webkit-radial-gradient('+(event.clientX-elements[i].getBoundingClientRect().left)+'px '+(event.clientY-elements[i].getBoundingClientRect().top)+'px, circle, white, black 60%) 30 30 30 30';
		} else {
			console.log('webkit-radial-gradient('+(event.clientX-elements[i].getBoundingClientRect().left)+'px '+(event.clientY-elements[i].getBoundingClientRect().top)+'px, white, black 60%)');
			elements[i].style["background-image"] = '-webkit-radial-gradient('+(event.clientX-elements[i].getBoundingClientRect().left)+'px '+(event.clientY-elements[i].getBoundingClientRect().top)+'px, circle, grey, black 80%)';
			elements[i].style['color'] = 'rgba(255,0,0,0)';
			elements[i].style['background-clip'] = 'text';
			elements[i].style['-webkit-background-clip'] = 'text';
			elements[i].style['-moz-background-clip'] = 'text';
		}
	}	
}

document.onmousemove = gradients;