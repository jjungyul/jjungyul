/**  England.js */


const info = document.querySelectorAll('.list');

const infoo = document.querySelector('.infoA');
 
info[0].addEventListener('click', function(){
	infoo.textContent = '런던';
}); 
info[1].addEventListener('click', function(){
	infoo.textContent = '영어';
});
info[2].addEventListener('click', function(){
	infoo.textContent = '2,436만 1천㏊ 세계79위';
});
info[3].addEventListener('click', function(){
	infoo.textContent = '6,773만 6,802명';
});
info[4].addEventListener('click', function(){
	infoo.textContent = '파운드(GBP, ￡)';
}); 
