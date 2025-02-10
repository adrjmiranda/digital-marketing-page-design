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
