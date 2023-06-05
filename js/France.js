/**   France.js */


 const info = document.querySelectorAll('.list');

const infoo = document.querySelector('.infoA');

info[0].addEventListener('click', function(){
	infoo.textContent = '파리';
});
info[1].addEventListener('click', function(){
	infoo.textContent = '프랑스어';
});
info[2].addEventListener('click', function(){
	infoo.textContent = '5,490만 8,687㏊ 세계48위';
});
info[3].addEventListener('click', function(){
	infoo.textContent = '6,475만 6,584명 세계23위';
});
info[4].addEventListener('click', function(){
	infoo.textContent = '유로(EUR, €)';
});


