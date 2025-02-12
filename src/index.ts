/**
 * Home Banner Slides
 */

// Element selection
const bannerContainer = document.querySelector(
	'.banner-slides'
) as HTMLDivElement;
const slideItems = document.querySelectorAll(
	'.banner-slide'
) as NodeListOf<HTMLDivElement>;
const slideDots = document.querySelectorAll(
	'.banner-dot'
) as NodeListOf<HTMLLIElement>;

const slideIntervalTime = 5000;
const activeClass = 'active';

if (bannerContainer && slideDots && slideItems.length > 0) {
	let activeSlideIndex = 0;

	const currentActiveSlideIndex = (): number => {
		return (activeSlideIndex + 1) % slideItems.length;
	};

	const defineSlideInterval = (): NodeJS.Timeout => {
		return setInterval(() => {
			activeSlideIndex = currentActiveSlideIndex();
			updateSlides();
		}, slideIntervalTime);
	};

	// Update slides and corresponding dots
	const updateSlides = (): void => {
		const leftPosition = slideItems[activeSlideIndex].offsetLeft;
		bannerContainer.style.transform = `translateX(-${leftPosition}px)`;

		const currentActiveDot = document.querySelector(
			'.banner-dot.active'
		) as HTMLLIElement;
		currentActiveDot.classList.remove(activeClass);

		slideDots[activeSlideIndex].classList.add(activeClass);
	};

	// Configure the slide interval
	let slideInterval = defineSlideInterval();

	// Clears the range before leaving the page
	window.addEventListener('beforeunload', () => {
		clearInterval(slideInterval);
	});

	// Dot click event
	slideDots.forEach((dot, index) => {
		dot.addEventListener('click', () => {
			activeSlideIndex = index;
			updateSlides();

			// Reset the range after click
			clearInterval(slideInterval);
			slideInterval = defineSlideInterval();
		});
	});
}

/**
 * Testimonials Slides
 */
const testimonialsList = document.querySelector(
	'.testimonials-items'
) as HTMLDivElement;

if (testimonialsList) {
	const highlightedClass = 'highlighted';

	const clearHighlightedClass = (
		testimonialsItems: NodeListOf<HTMLDivElement>
	): void => {
		testimonialsItems.forEach((item) => {
			item.classList.remove(highlightedClass);
		});
	};

	const changeHighlightedTestimonialSlide = (): void => {
		const testimonialsItems = document.querySelectorAll(
			'.testimonials-item'
		) as NodeListOf<HTMLDivElement>;

		clearHighlightedClass(testimonialsItems);

		const firstTestimonial = testimonialsItems[0];
		testimonialsList.appendChild(firstTestimonial);

		testimonialsList.style.transform = `translateX(0)`;

		const middleIndex = Math.ceil(testimonialsItems.length / 2);
		testimonialsItems[middleIndex].classList.add(highlightedClass);
	};

	let testimonialsSlideInterval = setInterval(
		changeHighlightedTestimonialSlide,
		3000
	);

	window.addEventListener('beforeunload', () => {
		clearInterval(testimonialsSlideInterval);
	});
}

/**
 * Toggle Navbar Menu
 */

const toggleMenuBtn = document.querySelector(
	'#toggle-menu'
) as HTMLButtonElement;
const navbarMenu = document.querySelector('.navbar-menu') as HTMLUListElement;

const showMenuIcon = document.querySelector(
	'#toggle-menu .ri-menu-line'
) as HTMLElement;
const closeMenuIcon = document.querySelector(
	'#toggle-menu .ri-close-large-line'
) as HTMLElement;

if (toggleMenuBtn && navbarMenu && showMenuIcon && closeMenuIcon) {
	toggleMenuBtn.addEventListener('click', () => {
		navbarMenu.classList.toggle('show');

		showMenuIcon.classList.toggle('hidden');
		closeMenuIcon.classList.toggle('hidden');
	});
}

/**
 * Toggle MobiLe Menu
 */
const mobileMenu = document.querySelector('.mobile-menu') as HTMLUListElement;
const mobileMenuButton = document.querySelector(
	'#mobile-menu-button'
) as HTMLButtonElement;

const showMobileMenuIcon = document.querySelector(
	'#mobile-menu-button .ri-more-2-fill'
) as HTMLElement;
const closeMobileMenuIcon = document.querySelector(
	'#mobile-menu-button .ri-close-large-line'
) as HTMLElement;

if (mobileMenu && mobileMenuButton) {
	mobileMenuButton.addEventListener('click', () => {
		mobileMenu.classList.toggle('show');

		showMobileMenuIcon.classList.toggle('hidden');
		closeMobileMenuIcon.classList.toggle('hidden');
	});
}

/**
 * Create Animations with ScrollReveal
 */

import ScrollReveal from 'scrollreveal';

const createScrollReveal = (
	select: string,
	options: scrollReveal.ScrollRevealObjectOptions
) => {
	ScrollReveal().reveal(select, {
		reset: true,
		easing: 'ease-in-out',
		duration: 1720,
		delay: 100,
		opacity: 0,
		...options,
	});
};

// About Section
createScrollReveal('.about-video iframe', {
	duration: 1500,
});

// Services Section
const servicesCardsNumber = (
	document.querySelectorAll('.services-item') as NodeListOf<HTMLDivElement>
)?.length;

if (servicesCardsNumber) {
	for (let i = 0; i < servicesCardsNumber; i++) {
		createScrollReveal(`.services-item:nth-child(${i + 1})`, {
			origin: 'bottom',
			distance: '8%',
			duration: 500,
			delay: i * 60,
		});
	}
}

// Our Team Section
const ourTeamCardsNumber = (
	document.querySelectorAll('.our-team-item') as NodeListOf<HTMLDivElement>
)?.length;

if (ourTeamCardsNumber) {
	for (let i = 0; i < ourTeamCardsNumber; i++) {
		createScrollReveal(`.our-team-item:nth-child(${i + 1})`, {
			origin: 'top',
			distance: '5%',
			duration: 500,
			delay: i * 25,
		});
	}
}

// Our Team Section
const plansCardsNumber = (
	document.querySelectorAll('.plans-item') as NodeListOf<HTMLDivElement>
)?.length;

if (plansCardsNumber) {
	for (let i = 0; i < plansCardsNumber; i++) {
		createScrollReveal(`.plans-item:nth-child(${i + 1})`, {
			origin: 'bottom',
			distance: '5%',
			duration: 500,
			delay: i * 25,
			reset: true,
		});
	}
}
