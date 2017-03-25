var loadPictures = function (url) {
	var htmlArr = [];
	var html = '';
	var route = url.split("/");
	console.log(route);


	if (route[3] == "people") {

		html = "<div class='titlePage'><div class='titlePageTitle'>people</div>"+
		"<div class='titlePageText'>girls boys bodies faces</div><div class='titlePageBg'></div></div>";

		htmlArr.push('IMG_3530.jpg');
		htmlArr.push('IMG_5992-Edit-2.jpg');
		htmlArr.push('IMG_5542-Edit-Edit.jpg');
		htmlArr.push('IMG_5600-Edit.jpg');
		htmlArr.push('IMG_6870.jpg');
		htmlArr.push('IMG_7131.jpg');
		htmlArr.push('IMG_7165-Edit.jpg');
		htmlArr.push('IMG_7188-Edit.jpg');
		htmlArr.push('IMG_7274.jpg');
		htmlArr.push('IMG_7291.jpg');
		htmlArr.push('IMG_7367.jpg');
		htmlArr.push('IMG_7515.jpg');
		htmlArr.push('IMG_9429.jpg');
		htmlArr.push('IMG_9440-Edit-2.jpg');
		htmlArr.push('IMG_9659.jpg');
		htmlArr.push('IMG_9851.jpg');
		htmlArr.push('IMG_9917.jpg');
		htmlArr.push('IMG_9309.jpg');
		htmlArr.push('IMG_9473.jpg');
		htmlArr.push('IMG_9686.jpg');
		htmlArr.push('IMG_0295.jpg');
		htmlArr.push('IMG_7714.jpg');
		htmlArr.push('IMG_7886.jpg');
		htmlArr.push('IMG_7895.jpg');
		htmlArr.push('IMG_8030-Edit.jpg');

		for(var i=0; i < htmlArr.length; i++){
			html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/"+htmlArr[i]+" height='600px' class='image'/>";
		}

	} else if (route[3] == "things") {

		htmlArr.push('IMG_3530.jpg');
		htmlArr.push('IMG_5992-Edit-2.jpg');
		htmlArr.push('IMG_5542-Edit-Edit.jpg');
		htmlArr.push('IMG_5600-Edit.jpg');
		htmlArr.push('IMG_6870.jpg');
		htmlArr.push('IMG_7131.jpg');
		htmlArr.push('IMG_7165-Edit.jpg');
		htmlArr.push('IMG_7188-Edit.jpg');
		htmlArr.push('IMG_7274.jpg');
		htmlArr.push('IMG_7291.jpg');
		htmlArr.push('IMG_7367.jpg');
		htmlArr.push('IMG_7515.jpg');
		htmlArr.push('IMG_9429.jpg');
		htmlArr.push('IMG_9440-Edit-2.jpg');
		htmlArr.push('IMG_9659.jpg');
		htmlArr.push('IMG_9851.jpg');
		htmlArr.push('IMG_9917.jpg');
		htmlArr.push('IMG_9309.jpg');
		htmlArr.push('IMG_9473.jpg');
		htmlArr.push('IMG_9686.jpg');
		htmlArr.push('IMG_0295.jpg');
		htmlArr.push('IMG_7714.jpg');
		htmlArr.push('IMG_7886.jpg');
		htmlArr.push('IMG_7895.jpg');
		htmlArr.push('IMG_8030-Edit.jpg');

		for(var i=0; i < htmlArr.length; i++){
			html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/"+htmlArr[i]+" height='600px' class='image'/>";
		}


	} else if (route[3] == "film") {

		htmlArr.push('IMG_1180.jpg');
		htmlArr.push('IMG_1134.jpg');
		htmlArr.push('IMG_0813.jpg');
		htmlArr.push('IMG_3530bw.jpg');

		for(var i=0; i < htmlArr.length; i++){
			html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/"+htmlArr[i]+" height='600px' class='image'/>";
		}


	} else if (route[3] == "clients") {

		htmlArr.push('IMG_0295.jpg');
		htmlArr.push('IMG_7714.jpg');
		htmlArr.push('IMG_7886.jpg');
		htmlArr.push('IMG_7895.jpg');
		htmlArr.push('IMG_8030-Edit.jpg');

		for(var i=0; i < htmlArr.length; i++){
			html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/"+htmlArr[i]+" height='600px' class='image'/>";
		}


	}else if (route[3] == "about") {

		html = "<div class='titlePage'><div class='titlePageTitle'>about</div>"+
		"<div class='titlePageText'>hi! how are you?</div><div class='titlePageBg'></div></div>"+
		"<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/IMG_9957.jpg height='600px' class='image'/>"+
		"<div id='Aboutme'><div class='paragraph'>"+
		"Edmund is a photographer based in Austin and Dallas Texas USA. He has won multiple photography awards and is always ready to explore new inspirations. Feel free to contact him for contract/personal work and collaborations. "+
		"</div>";

	} else {

		htmlArr.push('IMG_0568-Edit.jpg');	

		for(var i=0; i < htmlArr.length; i++){
			html = html + "<img src=https://dl.dropboxusercontent.com/u/836639/tumblr/Pictures/"+htmlArr[i]+" height='600px' class='image'/>";
		}
	}



	var loading = document.getElementById('Epiloadpage');
	loading.parentNode.removeChild(loading);

	$('#Prologue').after(html);
}