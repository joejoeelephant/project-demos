const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNavigation = document.querySelector('.primary-navigation');
const primaryHeader = document.querySelector('.primary-header');

navToggle.addEventListener('click', () => {
    primaryNavigation.hasAttribute('data-visible') ? navToggle.setAttribute('aria-expanded', false) : navToggle.setAttribute('aria-expanded', true)
    primaryNavigation.hasAttribute('data-visible') ? navToggle.setAttribute('aria-expanded', false) : navToggle.setAttribute('aria-expanded', true)
    primaryNavigation.toggleAttribute('data-visible')
    primaryHeader.toggleAttribute('data-overlay')

})

const slider = new A11YSlider(document.querySelector('.slider'), {
    adaptiveHeight: false,
    dots: true,
    centerMode: false,
    arrows: false,
    responsive: {
        480: {
            dots: false,
            centerMode: true
        }
    }
});