document.addEventListener("DOMContentLoaded", function() {

	// Mobile Menu

	const menuBlockOpen = document.querySelector('.menu-block-open')
	const menuBtn = document.querySelector('.burger')
	let menuOpen = false;
	menuBtn.addEventListener('click', () => {
		if(!menuOpen){
			menuBtn.classList.add('open')
			menuBlockOpen.classList.add('menu-block-open__visible')
			menuOpen = true;
		} else {
			menuBtn.classList.remove('open')
			menuBlockOpen.classList.remove('menu-block-open__visible')
			menuOpen = false;
		}
	})

	const mobileCities = document.querySelector('.mobile-cities')
	const mobileUl = document.querySelector('.mobile-cities__btn')
	const mobileCitiesArrow = document.querySelector('.arrow')
	let mobileCitiesOpen = false;
	mobileUl.addEventListener('click', () => {
		if(!mobileCitiesOpen){
			mobileCitiesArrow.innerHTML = '⟶'
			mobileCities.classList.add('mobile-cities__open')
			mobileCitiesOpen = true;
		} else {
			mobileCitiesArrow.innerHTML = '⟵'
			mobileCities.classList.remove('mobile-cities__open')
			mobileCitiesOpen = false;
		}
	})

	// Change language

	const selected = document.querySelector('.selected')
	const optionsContainer = document.querySelector('.options-container')

	const optionsList = document.querySelectorAll('.option')

	selected.addEventListener('click', () => {
		optionsContainer.classList.toggle('active__radio')
		selected.classList.add('hide')
	})

	optionsList.forEach ( o => {
		o.addEventListener('click', () => {
			selected.innerHTML = o.querySelector('label').innerHTML
			optionsContainer.classList.remove('active__radio')
			selected.classList.remove('hide')
		})
	})

	// Slider

	var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
	})

	// Copy date

	let date = document.querySelector('.copy-date')
	let now = new Date()
	let year = now.getFullYear()
	date.innerHTML = year

	// Menu Location

	const itemLocation = document.querySelectorAll('li.item__location::after')
	itemLocation.addEventListener('mouseover', () => {
		itemLocation.style.backgroundImage='../images/dest/arrow-top.png'
	})
	
});