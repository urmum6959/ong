const tglBtn = document.getElementsByClassName("tglnv")[0];
const nvLnks = document.getElementsByClassName("navlnks")[0];

window.addEventListener("load", () => {
	tglBtn.addEventListener("click", () => {
		nvLnks.classList.toggle("active");
	});
});
