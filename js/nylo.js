var last = -1;
var code = "// nylo@@int answer: 42@point: {int x, y}@point c: 30, -24@@dub: {x|x*2}@int dist: {int a, b | sqrt((a.x-b.x)^2+(a.y-b.y))};@dub(5)@@2{print('hello world')}@2>3{print('Math is broken')}@[1,2,3,4]{x|print(x)}@@1:100:2{x|print(x)}@list: [1, 2, 3, 4]+1@result: (1, 2) + (5, 6)@@GimmeAnInteger: {int x | foo(x)}@GimmeAList: {list int x | foo(x)}@GimmeABdList: {list list int x | foo(x)}@@GimmeATwo: {int[=2] x | foo(x)}@GimmeABar: {int[bar()] x | foo(x)}@GimmeWhatIWant: {list[10>len()>5 and bar()] int[<10 and render(, 20)] x | foo(x)}@@a: {*2}(3) // 6@1:60:2{print()}@@dub: {*2}@dub(5)@@// You're in, scroll down";
var nl = 0;
var topy = '50%';

var write = function(x) {
	last+=1;
	if (code[last]=="@") {nl+=1; x.innerHTML+="<br>"; x.style.left="50%"; x.style.top = "calc( "+topy+" - 200px - "+(nl*39)+"px)"}
	else {x.innerHTML+=code[last]};
	x.style.left = (x.getBoundingClientRect().left-15)+"px";
	if (last==code.length-1) {window.clearInterval(writer)}
	if (code[last]==' ' && code[last-1]!=' ') {window.clearInterval(writer);writer = window.setInterval(write, 340, document.getElementById('full'));} 
	else if (code[last]=="@" || code[last+1]=="@") {window.clearInterval(writer);writer = window.setInterval(write, 600, document.getElementById('full'));}
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