import os
import glob
from PIL import Image
from pprint import pprint

starting_directory = os.getcwd()
urlPath = ""

f = open('load.js','w+')

def get404Page():
	os.chdir(starting_directory)
	errorPicture = 'IMG_7287.jpg'
	img = Image.open(errorPicture)
	width, height = img.size
	f.write("\nhtml = \"<div class='titlePage'><div class='titlePageTitle'>page not found</div>\"+"
			"\n\"<div class='titlePageText'>oops, nothing to see here<br><br><br><a href='/'>/home/</a></div><div class='titlePageBg'></div></div>\";")

	f.write("\nhtml = html + \"<img src="+urlPath+"Pictures/"+errorPicture+" height='600px' width='")
	f.write(str(width))
	f.write("px' class='image'/>\";")

f.write("var loadPictures = function (url) {"
		"\nvar loading = $('#Epiloadpage');"
		"\nloading.show();"
		"\nvar htmlArr = [];"
		"\nvar html = '';"
		"\nvar route = url.split('/');")

#### Home

homePageImage = 'IMG_0568-Edit.jpg'
img = Image.open(homePageImage)
width, height = img.size
f.write("\nif (route[3] == '') {"
		"\nhtml = html + \"<img src="+urlPath+"Pictures/"+homePageImage+" height='600px' width='")
f.write(str(width))
f.write("px' class='image'/>\";")

#### People

f.write("\n}else if (route[4] == 'people') {"
		"\nhtml = \"<div class='titlePage'><div class='titlePageTitle'>people</div>\"+"
		"\n\"<div class='titlePageText'>girls boys bodies faces</div><div class='titlePageBg'></div></div>\";")

starting_directory
os.chdir("./people")
for file in glob.glob("*.jpg"):
	img = Image.open(file)
	width, height = img.size
	f.write("\nhtml = html + \"<img src="+urlPath+"Pictures/people/"+file+" background-color='coral' height='600px' width='")
	f.write(str(width))
	f.write("px'class='image'/>\";")

#### Things

f.write("\n} else if (route[4] == 'things') {"
		"\nhtml = \"<div class='titlePage'><div class='titlePageTitle'>things</div>\"+"
		"\n\"<div class='titlePageText'>basically everything but people</div><div class='titlePageBg'></div></div>\";")

os.chdir(starting_directory)
os.chdir("./things")
for file in glob.glob("*.jpg"):
	img = Image.open(file)
	width, height = img.size
	f.write("\nhtml = html + \"<img src="+urlPath+"Pictures/things/"+file+" height='600px' width='")
	f.write(str(width))
	f.write("px'class='image'/>\";")

#### Film

f.write("\n} else if (route[4] == 'film') {"
		"\nhtml = \"<div class='titlePage'><div class='titlePageTitle'>film</div>\"+"
		"\n\"<div class='titlePageText'>made with an olympus om-1 and light</div><div class='titlePageBg'></div></div>\";")

os.chdir(starting_directory)
os.chdir("./film")
for file in glob.glob("*.jpg"):
	img = Image.open(file)
	width, height = img.size
	f.write("\nhtml = html + \"<img src="+urlPath+"Pictures/film/"+file+" height='600px' width='")
	f.write(str(width))
	f.write("px'class='image'/>\";")

#### Clients

f.write("\n} else if (route[4] == 'clients') { if (route[5] == null) {"
		"\nhtml = \"<div class='titlePage'><div class='titlePageTitle'>clients</div>\"+"
		"\n\"<div class='titlePageText'>you are all amazing</div><div class='titlePageBg'></div></div>\";")

os.chdir(starting_directory)
os.chdir("./clients")
for file in glob.glob("*.jpg"):
	clientName = file.split('-')[1].split('.')[0]
	clientNameNoSpace = file.split('-')[1].split('.')[0].replace(' ','')
	replaceSpaceFile = file.replace(' ','%20')
	f.write("\nhtml = html + \"<div class='clientCard image'><a href='#/clients/"+clientNameNoSpace+"' class='hijackLink'><span class='emptyBuffer'></span></a><div class='clientBanner'></div><div class='clientName'>"+clientName+"</div><img src="+urlPath+"Pictures/clients/"+replaceSpaceFile+" height='600px' width='300'></div>\"")

#### Handle Client 
os.chdir(starting_directory)
jpgCount = len(glob.glob1("./clients/","*.jpg"))
os.chdir(starting_directory)
folders = os.listdir("./clients/")
folders = [x for x in folders if "-" not in x]##folders[jpgCount:]			#### Array with all the names of the folders

f.write("\n} else { ")
f.write("if (route[5] == '"+folders[0]+"') {")
os.chdir(starting_directory)
os.chdir("./clients/"+folders[0])
for file in glob.glob("*.jpg"):
	img = Image.open(file)
	width, height = img.size
	f.write("\nhtml = html + \"<img src="+urlPath+"Pictures/clients/"+folders[0]+"/"+file+" height='600px' width='")
	f.write(str(width))
	f.write("px'class='image'/>\";")

for folderName in folders[1:]: 			#### Loop through the rest of the folders
	f.write("\n} else if (route[5] == '"+folderName+"') {")
	os.chdir(starting_directory)
	os.chdir("./clients/"+folderName)
	for file in glob.glob("*.jpg"):
		img = Image.open(file)
		width, height = img.size
		f.write("\nhtml = html + \"<img src="+urlPath+"Pictures/clients/"+folderName+"/"+file+" height='600px' width='")
		f.write(str(width))
		f.write("px'class='image'/>\";")

f.write("\n} else { /*404 page*/")
get404Page()
f.write("\n}}")

#### About

f.write("\n} else if (route[4] == 'about') {"
		"\nhtml = \"<div class='titlePage'><div class='titlePageTitle'>about</div>\"+"
		"\n\"<div class='titlePageText'>hi, how are you?</div><div class='titlePageBg'></div></div>\"+"
		"\n\"<img src="+urlPath+"Pictures/IMG_9957.jpg height='600px' wdith='300px' class='image'/>\"+"
		"\n\"<div id='Aboutme'><div class='paragraph'>\"+"
		"\n\"Edmund is a photographer based in Austin and Dallas Texas USA. He has won multiple photography awards and is always ready to explore new inspirations. Feel free to contact him for contract/personal work and collaborations. \"+"
		"\n\"</div>\";")

#### 404 page


f.write("\n} else {")
get404Page()



######## END OF FILE

f.write("\n}"
		"\nloading.hide();"
		"\n$('#Filling').html(html);"
		"\n}")

f.close()
