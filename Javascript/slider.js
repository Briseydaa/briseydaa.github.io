// addEventListener("load",function(){
//     var links = document.getElementsByTagName("a");
//     for (var i=0;i<links.length;i++){
//         links[i].addEventListener("click",function(e){
//         //prevent event action
//         e.preventDefault();
//         })
//     }
// });

// ------------------Efecto pegajoso del menú------------------
window.addEventListener("scroll", function() {
	let header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
})

// ---------------------------Slider---------------------------
let slider = document.querySelector(".slider-contenedor"),
	sliderIndividual = document.querySelectorAll(".contenido-slider"),
	contador = 1,
	width = sliderIndividual[0].clientWidth,
	intervalo = 20000;
window.addEventListener("resize", function(){
	width = sliderIndividual[0].clientWidth;
})
setInterval(function() {
	slides();
},intervalo);

function slides() {
	if (contador == sliderIndividual.length) {
		setTimeout(function() {
			slider.style.transform = "translate(0px)";
			slider.style.transition = "transform 500ms";
			contador = 1;
		},intervalo)
	} else{
		slider.style.transform = "translate(" + (-width*contador) + "px)";
		slider.style.transition = "transform .8s";
		contador++;
	}
}