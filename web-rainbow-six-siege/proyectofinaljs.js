var imagen=1;
var galeria=1;
var galeriav=1;

//Funcion que muestra el tabcontent de cada opcion de menú
function openPage(pageName) {
  // Oculta todos los elementos que tengan la clase tabcontent
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  //Muestra el tabcontent seleccionado
  document.getElementById(pageName).style.display = "block";

}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// Funcion carrusel de imagenes
function inicio(){
	
	setInterval(carrusel,4000);
		
}
function carrusel(){
	
	if(imagen <= 5){
	
	document.getElementById('image').src = "imagenes/carruselimg/img" + imagen + ".jpg";
	
	}	
	else{
		imagen = 1; 
		document.getElementById('image').src = "imagenes/carruselimg/img" + imagen + ".jpg";
	}
	imagen++;	
}

// Funcion de pasar imagenes y videos
function siguiente(){
			
	if(galeria<4){
		galeria=galeria+3;
		document.getElementById('imggaleria1').src = "imagenes/img/galeria" + galeria + ".jpg";
		document.getElementById('imggaleria2').src = "imagenes/img/galeria" + (galeria+1) + ".jpg";
		document.getElementById('imggaleria3').src = "imagenes/img/galeria" + (galeria+2) + ".jpg";
	}	
}
function anterior(){
	
	if(galeria>=4){
		galeria=galeria-3;
		document.getElementById('imggaleria1').src = "imagenes/img/galeria" + galeria + ".jpg";
		document.getElementById('imggaleria2').src = "imagenes/img/galeria" + (galeria+1) + ".jpg";
		document.getElementById('imggaleria3').src = "imagenes/img/galeria" + (galeria+2) + ".jpg";	
	}	
}		
function siguientev(){
			
	if(galeriav<4){
		galeriav=galeriav+3;
		document.getElementById('video1').src = "https://www.youtube.com/embed/uSr2c6UpXWM";
		document.getElementById('video2').src = "https://www.youtube.com/embed/V-TLRAay9PA";
		document.getElementById('video3').src = "https://www.youtube.com/embed/MoffcoKg5o8";
	}	
}
function anteriorv(){
			
	if(galeriav>=4){
		galeriav=galeriav-3;
		document.getElementById('video1').src = "https://www.youtube.com/embed/n8XU2jbBXXY";
		document.getElementById('video2').src = "https://www.youtube.com/embed/3em72Ar-m0U";
		document.getElementById('video3').src = "https://www.youtube.com/embed/gmi5w1lOI1Y";
	}	
}