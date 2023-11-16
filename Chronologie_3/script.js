let cb = document.querySelector('input[type=checkbox]');

let germanVersionMain = document.querySelector(' .main-german-version');
let englishVersionMain = document.querySelector('.main-english-version');
let germanVersionList = document.querySelector('.list-german-version');
let englishVersionList = document.querySelector('.list-english-version');


cb.addEventListener('change', function (e) {
	console.log(cb.checked);
	if (e.target.checked === true) {
		germanVersionMain.classList.add("no-visible");
		englishVersionMain.classList.remove("no-visible");
		germanVersionList.classList.add("no-visible");
		englishVersionList.classList.remove("no-visible");
	} else {
		germanVersionMain.classList.remove("no-visible");
		englishVersionMain.classList.add("no-visible");
		germanVersionList.classList.remove("no-visible");
		englishVersionList.classList.add("no-visible");
	}
})