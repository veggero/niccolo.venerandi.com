log 	= open('log.txt', 'r').read();
logPage = open('../menu/log.html', 'r+');
logHTML	= logPage.read();

logHTML = logHTML.replace(logHTML[logHTML.index('<posts>')+7:logHTML.index('</posts>')-1], '');
logPage.seek(0);
logPage.write(logHTML.replace('<posts>','<posts>'+log));

logPage = open('../menu/rss.rss', 'r+');
logHTML	= logPage.read();

while '<p>' in log:
	log = log.replace('<p>', '<item>');
	log = log.replace('</p>', '</item>');

logHTML = logHTML.replace(logHTML[logHTML.index('</description>')+14:logHTML.index('</channel>')-1], '');
logPage.seek(0);
logPage.write(logHTML.replace('<posts>','<posts>'+log));

logPage.close();
