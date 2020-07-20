const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const pageTitle = document.querySelector('.page-title')

const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    navigation.classList.toggle('navigation--active');
    pageTitle.classList.toggle('page-title--active');
}

hamburger.addEventListener('click', handleClick);