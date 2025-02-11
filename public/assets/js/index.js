/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("/**\n * Home Banner Slides\n */\n// Element selection\nvar bannerContainer = document.querySelector('.banner-slides');\nvar slideItems = document.querySelectorAll('.banner-slide');\nvar slideDots = document.querySelectorAll('.banner-dot');\nvar slideIntervalTime = 5000;\nvar activeClass = 'active';\nif (bannerContainer && slideDots && slideItems.length > 0) {\n    var activeSlideIndex_1 = 0;\n    var currentActiveSlideIndex_1 = function () {\n        return (activeSlideIndex_1 + 1) % slideItems.length;\n    };\n    var defineSlideInterval_1 = function () {\n        return setInterval(function () {\n            activeSlideIndex_1 = currentActiveSlideIndex_1();\n            updateSlides_1();\n        }, slideIntervalTime);\n    };\n    // Update slides and corresponding dots\n    var updateSlides_1 = function () {\n        var leftPosition = slideItems[activeSlideIndex_1].offsetLeft;\n        bannerContainer.style.transform = \"translateX(-\".concat(leftPosition, \"px)\");\n        var currentActiveDot = document.querySelector('.banner-dot.active');\n        currentActiveDot.classList.remove(activeClass);\n        slideDots[activeSlideIndex_1].classList.add(activeClass);\n    };\n    // Configure the slide interval\n    var slideInterval_1 = defineSlideInterval_1();\n    // Clears the range before leaving the page\n    window.addEventListener('beforeunload', function () {\n        clearInterval(slideInterval_1);\n    });\n    // Dot click event\n    slideDots.forEach(function (dot, index) {\n        dot.addEventListener('click', function () {\n            activeSlideIndex_1 = index;\n            updateSlides_1();\n            // Reset the range after click\n            clearInterval(slideInterval_1);\n            slideInterval_1 = defineSlideInterval_1();\n        });\n    });\n}\n/**\n * Testimonials Slides\n */\nvar testimonialsList = document.querySelector('.testimonials-items');\nif (testimonialsList) {\n    var highlightedClass_1 = 'highlighted';\n    var clearHighlightedClass_1 = function (testimonialsItems) {\n        testimonialsItems.forEach(function (item) {\n            item.classList.remove(highlightedClass_1);\n        });\n    };\n    var changeHighlightedTestimonialSlide = function () {\n        var testimonialsItems = document.querySelectorAll('.testimonials-item');\n        clearHighlightedClass_1(testimonialsItems);\n        var firstTestimonial = testimonialsItems[0];\n        testimonialsList.appendChild(firstTestimonial);\n        testimonialsList.style.transform = \"translateX(0)\";\n        var middleIndex = Math.ceil(testimonialsItems.length / 2);\n        testimonialsItems[middleIndex].classList.add(highlightedClass_1);\n    };\n    var testimonialsSlideInterval_1 = setInterval(changeHighlightedTestimonialSlide, 3000);\n    window.addEventListener('beforeunload', function () {\n        clearInterval(testimonialsSlideInterval_1);\n    });\n}\n/**\n * Toggle Navbar Menu\n */\nvar toggleMenuBtn = document.querySelector('#toggle-menu');\nvar navbarMenu = document.querySelector('.navbar-menu');\nvar showMenuIcon = document.querySelector('#toggle-menu .ri-menu-line');\nvar closeMenuIcon = document.querySelector('#toggle-menu .ri-close-large-line');\nif (toggleMenuBtn && navbarMenu && showMenuIcon && closeMenuIcon) {\n    toggleMenuBtn.addEventListener('click', function () {\n        navbarMenu.classList.toggle('show');\n        showMenuIcon.classList.toggle('hidden');\n        closeMenuIcon.classList.toggle('hidden');\n    });\n}\n/**\n * Toggle MobiLe Menu\n */\nvar mobileMenu = document.querySelector('.mobile-menu');\nvar mobileMenuButton = document.querySelector('#mobile-menu-button');\nvar showMobileMenuIcon = document.querySelector('#mobile-menu-button .ri-more-2-fill');\nvar closeMobileMenuIcon = document.querySelector('#mobile-menu-button .ri-close-large-line');\nif (mobileMenu && mobileMenuButton) {\n    mobileMenuButton.addEventListener('click', function () {\n        mobileMenu.classList.toggle('show');\n        showMobileMenuIcon.classList.toggle('hidden');\n        closeMobileMenuIcon.classList.toggle('hidden');\n    });\n}\n\n\n//# sourceURL=webpack://digital-marketing-page-design/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;