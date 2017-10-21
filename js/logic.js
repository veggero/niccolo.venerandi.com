var repeaters = [];

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

String.prototype.replaceBetween = function(start, end, what) {
    return this.substring(0, start) + what + this.substring(end);
}; // Ty Stackoverflow

cake = function() {
	a = "Before the earth was round, there was no end to things. No one tried to measure what they knew. Everything was warm and everyone would love and every contradiction was true the sun worked twice as hard and the moon was twice as far and the sky was still honestly blue. ";
	giver = a.substr(getRandomInt(0, a.length-25), getRandomInt(15, 25));
	if (giver[0]==' ') {giver = 'a'+giver};
	return giver;
}

var elements = document.getElementsByTagName('span');
for (var i = 0; i < elements.length; i++) {
	if (elements[i].hasAttribute('t')) {
		if (elements[i].getAttribute('t')=='!') {elements[i].setAttribute('t', cake())}
		repeaters.push('');
		elements[i].setAttribute("idn", i);
		elements[i].setAttribute('original', elements[i].innerHTML);
		elements[i].onmouseover = function() {window.clearInterval(repeaters[this.getAttribute('idn')]); repeaters[this.getAttribute('idn')]=window.setInterval(hov, 25, this, this.getAttribute('t'))};
		elements[i].onmouseout = function() {window.clearInterval(repeaters[this.getAttribute('idn')]); repeaters[this.getAttribute('idn')]=window.setInterval(hov, 50, this, this.getAttribute('original'))};
	}
}

hov = function(x, obv) {
	if (x.innerHTML.length < obv.length) {x.innerHTML+=" "};
	if (x.innerHTML.length > obv.length) {x.innerHTML=x.innerHTML.substr(0,x.innerHTML.length-1)};
	
	value = 0;
	while (x.innerHTML[value]==obv[value]) {
		value = getRandomInt(0, x.innerHTML.length);
		if (x.innerHTML==obv) {window.clearInterval(repeaters[x.getAttribute('idn')]); return}
	}
	x.innerHTML = x.innerHTML.replaceBetween(value, value+1, obv.substr(value, 1));
}


