var last = -1;
var code = "@// github.com/veggero/nylo@@fib:@    int n |@    =0 or =1@        1@    else@        fib(n-1)+fib(n-2)";
var nl = 0;
var topy = '50%';

var write = function(x) {
	last+=1;
	last_char = code[last]
	if (last_char == ' ') {last_char = '&nbsp;'}
	if (last_char == undefined) {return}
	if (last_char=="@") {nl+=1; x.innerHTML+="<br>"; x.style.left="50%"; x.style.top = "calc( "+topy+" - 200px - "+(nl*39)+"px)"}
	else {x.innerHTML+=last_char};
	x.style.left = (x.getBoundingClientRect().left-15)+"px";
	if (last==code.length-1) {window.clearInterval(writer)}
	if (last_char==' ' && code[last-1]!=' ') {window.clearInterval(writer);writer = window.setInterval(write, 340, document.getElementById('full'));} 
	else if (last_char=="@" || code[last+1]=="@") {window.clearInterval(writer);writer = window.setInterval(write, 600, document.getElementById('full'));}
	else if (code[last-1]=='@' || code[last-1]==' ') {window.clearInterval(writer);writer = window.setInterval(write, 120, document.getElementById('full'));}
	
}

function slip() {
	if (document.body.scrollTop>0) {
		topy = "26%";
		document.getElementById("full").style.top = "calc( 26% - 200px - "+(nl*39)+"px)";
		document.getElementById("sch").style.top = "10%";
	} else {
		topy = "50%";
		document.getElementById("full").style.top = "calc( 50% - 200px - "+(nl*39)+"px)";
		document.getElementById("sch").style.top = "90%";
	}
} 

var writer = window.setInterval(write, 450, document.getElementById('full'));
