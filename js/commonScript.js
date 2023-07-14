

// 상단 네비 검색버튼
const searchButton = document.querySelector('.search-button');
const searchBg = document.querySelector('#searchBg');
let isOpen = false;

searchButton.addEventListener('click', function() {
  isOpen = !isOpen;
  if (isOpen) {
    searchBg.style.left = '100%';
    searchBg.style.transform = 'translateX(-100%)';
  } else {
    searchBg.style.left = '-50%';
    searchBg.style.transform = 'translateX(100%)';
  }
});

document.addEventListener('click', function(event) { // 임의 공간 클릭시 버튼 else
const target = event.target;
const isSearchButton = target.matches('.search-button') || target.closest('.search-button');
const isSearchBg = target.matches('#searchBg') || target.closest('#searchBg');

if (!isSearchButton && !isSearchBg) {
  isOpen = false;
  searchBg.style.left = '-50%';
  searchBg.style.transform = 'translateX(100%)';
}
});