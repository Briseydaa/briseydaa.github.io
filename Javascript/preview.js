const galery = document.querySelectorAll(".galeria .image"),
previewBox = document.querySelector(".overlay-preview"),
closeIcon = previewBox.querySelector(".icon"),
previewImg = previewBox.querySelector("img"),
currentImg = previewBox.querySelector(".current-img"),
totalImg = previewBox.querySelector(".total-img");

window.addEventListener('click', function(e) {
	if (e.target == previewBox) {
		previewBox.classList.remove("show");
	}
});
window.onload = ()=>{
	for (let i = 0; i < galery.length; i++) {
		totalImg.textContent = galery.length;
		let newIndex = i;
		let clickImgIndex;
		galery[i].onclick = ()=>{
			clickImgIndex = newIndex;
			function preview() {
				currentImg.textContent = newIndex + 1;
				let selectedImgUrl = galery[newIndex].querySelector("img").src;
				previewImg.src = selectedImgUrl;
			}
			const prevBtn = document.querySelector(".prev");
			const nextBtn = document.querySelector(".next");
			if (newIndex == 0) {
				prevBtn.style.display = "none";
			}
			if (newIndex >= galery.length - 1) {
				nextBtn.style.display = "none";
			}
			prevBtn.onclick = ()=>{
				newIndex--;
				if (newIndex == 0) {
					preview();
					prevBtn.style.display = "none";
				}else{
					preview();
					nextBtn.style.display = "block";
				}
			}
			nextBtn.onclick = ()=>{
				newIndex++;
				if (newIndex >= galery.length - 1) {
					preview();
					nextBtn.style.display = "none";
				}else{
					preview();
					prevBtn.style.display = "block";
				}
			}

			preview();
			previewBox.classList.add("show");
			closeIcon.onclick = ()=>{
				newIndex = clickImgIndex;
				prevBtn.style.display = "block";
				nextBtn.style.display = "block";
				previewBox.classList.remove("show");
			}
		}
	}
}