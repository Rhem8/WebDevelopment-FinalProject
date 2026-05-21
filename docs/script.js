// On page load, apply saved theme preference
function loadSavedTheme() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
        document.documentElement.classList.add('dark');
    }
}
loadSavedTheme();

document.addEventListener('DOMContentLoaded', function () {

    const toggleBtn = document.querySelector('#theme-toggle');

    if (toggleBtn) {
        // Set button label to match current theme on load
        const isDark = document.documentElement.classList.contains('dark');
        toggleBtn.textContent = isDark ? '☀️ Light' : '🌙 Dark';

        toggleBtn.addEventListener('click', function () {
            const nowDark = document.documentElement.classList.toggle('dark');
            toggleBtn.textContent = nowDark ? '☀️ Light' : '🌙 Dark';
            localStorage.setItem('theme', nowDark ? 'dark' : 'light');
        });
    }

    // Bootstrap Interaction Logic
    const modalElement    = document.querySelector('#systemControlModal');
    const carouselElement = document.querySelector('#dashboardHeroCarousel');

    // Carousel
    let dashboardSliderInstance;
    if (carouselElement) {
        dashboardSliderInstance = new bootstrap.Carousel(carouselElement, {
            interval: 6000,
            wrap: true
        });
    }

    // Modal
    if (modalElement && typeof bootstrap !== 'undefined') {
        const systemModalInstance = new bootstrap.Modal(modalElement);

        const launchModalBtn = document.querySelector('#triggerModalProgrammatically');
        if (launchModalBtn) {
            launchModalBtn.addEventListener('click', function () {
                systemModalInstance.show();
            });
        }

        const confirmPayloadBtn = document.querySelector('#confirmModalPayload');
        if (confirmPayloadBtn) {
            confirmPayloadBtn.addEventListener('click', function () {
                alert('🔒 Action confirmed. Closing modal pop-up.');
                systemModalInstance.hide();
            });
        }
    }

    // Manual carousel button
    const skipCarouselBtn = document.querySelector('#triggerCarouselNext');
    if (skipCarouselBtn && dashboardSliderInstance) {
        skipCarouselBtn.addEventListener('click', function () {
            dashboardSliderInstance.next();
        });
    }

    // Slide change event
    const alertAnchor = document.querySelector('#dynamicAlertAnchor');
    if (carouselElement && alertAnchor) {
        carouselElement.addEventListener('slid.bs.carousel', function (event) {
            const activeSlideIndex = event.to + 1;
            alertAnchor.className = 'alert alert-warning alert-dismissible fade show';
            alertAnchor.querySelector('strong').textContent = 'Slide Event Tracker:';
            alertAnchor.childNodes[2].textContent =
                ` Showing slide frame entry [${activeSlideIndex} of 2].`;
        });
    }
  
// Active Nav Link
const navLinks = document.querySelectorAll('.nav-links a');
  
navLinks.forEach(function (link) {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});

});

// Dom Manipulation (at javascript.html)
const displayBox     = document.querySelector('#dom-display-box');
const btnText        = document.querySelector('#btn-text-update');
const btnStyle       = document.querySelector('#btn-style-toggle');
const validationForm = document.querySelector('#lab-validation-form');
const inputName      = document.querySelector('#input-student-name');
const feedbackMsg    = document.querySelector('#form-feedback-msg');

const topicRegistry = [
    'Variables & Scope',
    'Control Flow Systems',
    'DOM Node Trees',
    'Asynchronous Events'
];

if (btnText && displayBox) {
    btnText.addEventListener('click', function () {

        if (displayBox.textContent === '⚡ Success! The text was changed') {
            displayBox.textContent = '✨ Again?';
            displayBox.style.borderColor = '#e6ef44';
        } else {
            displayBox.textContent = '⚡ Success! The text was changed';
            displayBox.style.borderColor = '#2563eb';
        }

    });
}

if (btnStyle && displayBox) {
    btnStyle.addEventListener('click', function () {
        if (displayBox.style.backgroundColor === 'rgb(254, 240, 138)') {
            displayBox.style.backgroundColor = '';
            displayBox.style.color           = '';
        } else {
            displayBox.style.backgroundColor = '#fef08a';
            displayBox.style.color           = '#854d0e';
        }
    });
}

if (validationForm && inputName && feedbackMsg) {
    validationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const userInputValue = inputName.value.trim();

        if (userInputValue === '') {
            feedbackMsg.textContent = '❌ Error: Name field cannot be empty!';
            feedbackMsg.style.color = '#dc2626';
        } else {
            feedbackMsg.textContent =
                `✅ Welcome, ${userInputValue}! Your data was submitted successfully.`;
            feedbackMsg.style.color = '#16a34a';
            inputName.value = '';
        }
    });
}
