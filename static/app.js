// Money Multiplier Investment & Services - Fixed Interactive JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('%cMoney Multiplier Investment & Services', 'color: #1e3a7d; font-size: 20px; font-weight: bold;');
    console.log('%cWebsite loading with logo integration...', 'color: #6EBE44; font-size: 14px;');

    // Initialize all functionality with proper error handling
    try {
        initLogoErrorHandling();
        initNavigation();
        initMobileMenu();
        initFormHandling();
        initAnimations();
        initScrollEffects();
        initInteractiveEffects();
        
        console.log('%c✅ All systems initialized successfully!', 'color: #6EBE44; font-size: 14px; font-weight: bold;');
    } catch (error) {
        console.error('Initialization error:', error);
    }
});

// Logo Error Handling and Fallback System
function initLogoErrorHandling() {
    const logos = document.querySelectorAll('.company-logo');
    console.log('Found', logos.length, 'logo elements to handle');
    
    logos.forEach((logo, index) => {
        // Set up error handling
        logo.addEventListener('error', function() {
            console.warn(`Logo ${index + 1} failed to load, implementing fallback`);
            createLogoFallback(this);
        });
        
        logo.addEventListener('load', function() {
            console.log(`Logo ${index + 1} loaded successfully`);
        });
        
        // Check if logo is already broken
        if (logo.complete && logo.naturalHeight === 0) {
            console.warn(`Logo ${index + 1} already broken, creating fallback`);
            createLogoFallback(logo);
        }
    });
    
    function createLogoFallback(failedLogo) {
        const fallback = document.createElement('div');
        fallback.className = 'logo-fallback company-logo';
        fallback.style.cssText = `
            width: 55px;
            height: 55px;
            background: linear-gradient(135deg, #6EBE44, #1e3a7d);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 16px;
            transition: transform 0.3s ease;
            cursor: pointer;
            flex-shrink: 0;
        `;
        fallback.textContent = 'MM';
        fallback.title = 'Money Multiplier Investment & Services';
        
        // Add hover effect
        fallback.addEventListener('mouseenter', () => {
            fallback.style.transform = 'scale(1.05)';
        });
        fallback.addEventListener('mouseleave', () => {
            fallback.style.transform = 'scale(1)';
        });
        
        // Replace the failed image
        failedLogo.parentNode.replaceChild(fallback, failedLogo);
    }
}

// Enhanced Navigation System
function initNavigation() {
    console.log('Initializing navigation system...');
    
    const navLinks = document.querySelectorAll('.nav__link[data-page]');
    const pages = document.querySelectorAll('.page[data-page]');
    const buttons = document.querySelectorAll('button[data-page], .btn[data-page]');
    const footerLinks = document.querySelectorAll('.footer-content a[data-page]');
    const logoLinks = document.querySelectorAll('.logo-link[data-page]');
    
    console.log('Navigation elements found:', {
        navLinks: navLinks.length,
        pages: pages.length,
        buttons: buttons.length,
        footerLinks: footerLinks.length,
        logoLinks: logoLinks.length
    });
    
    // Combine all navigation triggers
    const allNavTriggers = [...navLinks, ...buttons, ...footerLinks, ...logoLinks];
    
    // Set initial active states
    setActivePage('home');
    
    // Add click handlers to all navigation triggers
    allNavTriggers.forEach((trigger, index) => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const targetPage = this.getAttribute('data-page');
            console.log(`Navigation triggered: ${targetPage} from element ${index + 1}`);
            
            if (targetPage && pages.length > 0) {
                navigateToPage(targetPage);
                closeMobileMenu();
            } else {
                console.warn('Invalid navigation target or no pages found');
            }
        });
    });
    
    function navigateToPage(targetPageId) {
        console.log('Navigating to page:', targetPageId);
        
        // Validate target page exists
        const targetPage = document.querySelector(`.page[data-page="${targetPageId}"]`);
        if (!targetPage) {
            console.error('Target page not found:', targetPageId);
            return;
        }
        
        // Hide all pages
        pages.forEach(page => {
            page.classList.remove('active');
            page.style.display = 'none';
            page.style.opacity = '0';
            page.style.transform = 'translateY(20px)';
        });
        
        // Remove active class from all nav links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // Show target page
        targetPage.style.display = 'block';
        
        // Force reflow
        targetPage.offsetHeight;
        
        // Animate in
        setTimeout(() => {
            targetPage.classList.add('active');
            targetPage.style.opacity = '1';
            targetPage.style.transform = 'translateY(0)';
        }, 50);
        
        // Update navigation active state
        const targetNavLink = document.querySelector(`.nav__link[data-page="${targetPageId}"]`);
        if (targetNavLink) {
            targetNavLink.classList.add('active');
        }
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Update page title
        updatePageTitle(targetPageId);
        
        // Trigger page animations
        setTimeout(() => {
            triggerPageAnimations(targetPage);
        }, 100);
        
        console.log('Successfully navigated to:', targetPageId);
    }
    
    function setActivePage(pageId) {
        console.log('Setting initial active page:', pageId);
        
        const targetPage = document.querySelector(`.page[data-page="${pageId}"]`);
        const targetNavLink = document.querySelector(`.nav__link[data-page="${pageId}"]`);
        
        if (!targetPage) {
            console.error('Initial page not found:', pageId);
            return;
        }
        
        // Hide all pages first
        pages.forEach(page => {
            page.classList.remove('active');
            page.style.display = 'none';
        });
        
        // Show target page
        targetPage.style.display = 'block';
        targetPage.classList.add('active');
        targetPage.style.opacity = '1';
        targetPage.style.transform = 'translateY(0)';
        
        // Set active nav link
        navLinks.forEach(link => link.classList.remove('active'));
        if (targetNavLink) {
            targetNavLink.classList.add('active');
        }
        
        updatePageTitle(pageId);
        
        // Trigger initial animations
        setTimeout(() => {
            triggerPageAnimations(targetPage);
        }, 100);
    }
    
    function updatePageTitle(pageId) {
        const pageTitles = {
            home: 'Money Multiplier Investment & Services | Comprehensive Insurance Solutions',
            about: 'About Us | Money Multiplier Investment & Services',
            services: 'Our Services | Money Multiplier Investment & Services',
            contact: 'Contact Us | Money Multiplier Investment & Services'
        };
        
        document.title = pageTitles[pageId] || pageTitles.home;
    }
    
    // Global navigation function for debugging
    window.navigateTo = navigateToPage;
    
    console.log('Navigation system initialized successfully');
}

// Mobile Menu System
function initMobileMenu() {
    console.log('Initializing mobile menu...');
    
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (!navToggle || !navMenu) {
        console.warn('Mobile menu elements not found');
        return;
    }
    
    // Toggle menu
    navToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleMobileMenu();
    });
    
    // Close menu when clicking nav links
    const navLinks = navMenu.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            if (navMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        }
    });
    
    // Close menu with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    
    function toggleMobileMenu() {
        const isActive = navMenu.classList.contains('active');
        
        if (isActive) {
            closeMobileMenu();
        } else {
            navMenu.classList.add('active');
            navToggle.classList.add('active');
            document.body.style.overflow = 'hidden';
            console.log('Mobile menu opened');
        }
    }
    
    console.log('Mobile menu initialized successfully');
}

function closeMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navMenu && navToggle) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.style.overflow = '';
        console.log('Mobile menu closed');
    }
}

// Form Handling System
function initFormHandling() {
    console.log('Initializing form handling...');
    
    const form = document.getElementById('enquiryForm');
    const formSuccess = document.getElementById('formSuccess');
    
    if (!form || !formSuccess) {
        console.warn('Form elements not found');
        return;
    }
    
    const formElements = {
        fullName: document.getElementById('fullName'),
        email: document.getElementById('email'),
        phone: document.getElementById('phone'),
        company: document.getElementById('company'),
        service: document.getElementById('service'),
        message: document.getElementById('message')
    };
    
    const errorElements = {
        fullName: document.getElementById('fullNameError'),
        email: document.getElementById('emailError'),
        phone: document.getElementById('phoneError'),
        message: document.getElementById('messageError')
    };
    
    // Validation rules
    const validators = {
        fullName: (value) => {
            if (!value.trim()) return 'Full name is required';
            if (value.trim().length < 2) return 'Full name must be at least 2 characters';
            return '';
        },
        
        email: (value) => {
            if (!value.trim()) return 'Email address is required';
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) return 'Please enter a valid email address';
            return '';
        },
        
        phone: (value) => {
            if (!value.trim()) return 'Phone number is required';
            const cleanPhone = value.replace(/\D/g, '');
            if (cleanPhone.length !== 10) return 'Please enter a valid 10-digit phone number';
            return '';
        },
        
        message: (value) => {
            if (!value.trim()) return 'Message is required';
            if (value.trim().length < 10) return 'Message must be at least 10 characters';
            return '';
        }
    };
    
    // Add real-time validation
    Object.keys(formElements).forEach(fieldName => {
        const field = formElements[fieldName];
        const errorElement = errorElements[fieldName];
        
        if (field && errorElement && validators[fieldName]) {
            field.addEventListener('blur', () => validateField(fieldName));
            field.addEventListener('input', () => {
                if (errorElement.textContent) {
                    clearError(fieldName);
                }
            });
        }
    });
    
    // Phone formatting
    if (formElements.phone) {
        formElements.phone.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 10) {
                value = value.slice(0, 10);
            }
            e.target.value = value;
        });
    }
    
    // Form submission
    form.addEventListener('submit', function(e) {

    const valid =
        validateField("fullName") &&
        validateField("email") &&
        validateField("phone") &&
        validateField("message");

    if (!valid) {
        e.preventDefault();
    }

    });
    
    
    function validateField(fieldName) {
        const field = formElements[fieldName];
        const errorElement = errorElements[fieldName];
        const validator = validators[fieldName];
        
        if (!field || !errorElement || !validator) return true;
        
        const error = validator(field.value);
        
        if (error) {
            showError(fieldName, error);
            return false;
        } else {
            clearError(fieldName);
            return true;
        }
    }
    
    function showError(fieldName, message) {
        const errorElement = errorElements[fieldName];
        const field = formElements[fieldName];
        
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
            errorElement.style.color = 'var(--color-error)';
        }
        
        if (field) {
            field.style.borderColor = 'var(--color-error)';
        }
    }
    
    function clearError(fieldName) {
        const errorElement = errorElements[fieldName];
        const field = formElements[fieldName];
        
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.style.display = 'none';
        }
        
        if (field) {
            field.style.borderColor = '';
        }
    }
    
    function handleFormSubmission() {
        console.log('Processing form submission...');
        
        // Clear all errors
        Object.keys(errorElements).forEach(fieldName => {
            clearError(fieldName);
        });
        
        // Validate all fields
        const validationResults = Object.keys(validators).map(fieldName => {
            return validateField(fieldName);
        });
        
        const isValid = validationResults.every(result => result === true);
        
        if (!isValid) {
            console.log('Form validation failed');
            const firstError = form.querySelector('.form-error:not(:empty)');
            if (firstError) {
                firstError.closest('.form-group').scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
            return;
        }
        
        // Show loading state
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        
        submitButton.innerHTML = '<span class="btn-loading">Sending...</span>';
        submitButton.disabled = true;
        submitButton.style.opacity = '0.7';
        
        // Simulate form submission
        setTimeout(() => {
            console.log('Form submitted successfully');
            
            // Show success message
            form.style.display = 'none';
            formSuccess.classList.remove('hidden');
            formSuccess.style.display = 'block';
            formSuccess.style.opacity = '1';
            
            // Scroll to success
            formSuccess.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            
            // Reset after delay
            setTimeout(() => {
                resetForm();
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
                submitButton.style.opacity = '1';
            }, 5000);
            
        }, 2000);
    }
    
    function resetForm() {
        form.reset();
        Object.keys(errorElements).forEach(fieldName => {
            clearError(fieldName);
        });
        formSuccess.classList.add('hidden');
        formSuccess.style.display = 'none';
        form.style.display = 'block';
    }
    
    console.log('Form handling initialized successfully');
}

// Animation System
function initAnimations() {
    console.log('Initializing animation system...');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                if (element.classList.contains('animate-slide-up')) {
                    element.style.animation = 'slideUp 0.6s ease-out forwards';
                } else if (element.classList.contains('animate-slide-left')) {
                    element.style.animation = 'slideLeft 0.6s ease-out forwards';
                } else if (element.classList.contains('animate-slide-right')) {
                    element.style.animation = 'slideRight 0.6s ease-out forwards';
                } else if (element.classList.contains('animate-fade-in')) {
                    element.style.animation = 'fadeIn 0.6s ease-out forwards';
                }
                
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('[class*="animate-"]');
    console.log('Found', animatedElements.length, 'animated elements');
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

function triggerPageAnimations(page) {
    if (!page) return;
    
    const animatedElements = page.querySelectorAll('[class*="animate-"]');
    console.log('Triggering animations for', animatedElements.length, 'elements');
    
    animatedElements.forEach((element, index) => {
        // Reset
        element.style.animation = 'none';
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        // Animate with stagger
        setTimeout(() => {
            if (element.classList.contains('animate-slide-up')) {
                element.style.animation = 'slideUp 0.6s ease-out forwards';
            } else if (element.classList.contains('animate-slide-left')) {
                element.style.animation = 'slideLeft 0.6s ease-out forwards';
            } else if (element.classList.contains('animate-slide-right')) {
                element.style.animation = 'slideRight 0.6s ease-out forwards';
            } else if (element.classList.contains('animate-fade-in')) {
                element.style.animation = 'fadeIn 0.6s ease-out forwards';
            }
        }, index * 100);
    });
}

// Scroll Effects
function initScrollEffects() {
    console.log('Initializing scroll effects...');
    
    const header = document.getElementById('header');
    if (!header) return;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 10) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.backdropFilter = 'blur(20px)';
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
            header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        }
    });
}

// Interactive Effects
function initInteractiveEffects() {
    console.log('Initializing interactive effects...');
    
    // Enhanced button effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px)';
            button.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
            button.style.boxShadow = '';
        });
    });
    
    // Card hover effects
    const cards = document.querySelectorAll('.feature-card, .service-highlight, .contact-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-4px)';
            card.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '';
        });
    });
    
    // Icon animations
    const icons = document.querySelectorAll('.icon-item');
    icons.forEach((icon, index) => {
        setTimeout(() => {
            icon.style.animation = 'bounce 2s infinite';
            icon.style.animationDelay = `${index * 0.2}s`;
        }, 1000);
    });
}

// Debug Functions
window.debugNav = () => {
    console.log('=== Navigation Debug Info ===');
    console.log('Nav links:', document.querySelectorAll('.nav__link[data-page]').length);
    console.log('Pages:', document.querySelectorAll('.page[data-page]').length);
    console.log('Buttons:', document.querySelectorAll('button[data-page], .btn[data-page]').length);
    console.log('Logo links:', document.querySelectorAll('.logo-link[data-page]').length);
    console.log('Current active page:', document.querySelector('.page.active')?.getAttribute('data-page'));
    console.log('Company logos:', document.querySelectorAll('.company-logo').length);
    console.log('==============================');
};

window.testNav = (page) => {
    if (window.navigateTo) {
        window.navigateTo(page);
        console.log(`✅ Navigated to ${page}`);
    } else {
        console.error('❌ Navigation function not available');
    }
};

window.testLogo = () => {
    const logoLink = document.querySelector('.logo-link[data-page="home"]');
    if (logoLink) {
        logoLink.click();
        console.log('✅ Logo clicked - navigated to home');
    } else {
        console.error('❌ Logo link not found');
    }
};

// Success messages
console.log('%c✓ Navigation system with logo integration', 'color: #6EBE44; font-size: 12px;');
console.log('%c✓ Mobile menu functionality', 'color: #6EBE44; font-size: 12px;');
console.log('%c✓ Form validation and submission', 'color: #6EBE44; font-size: 12px;');
console.log('%c✓ Animations and scroll effects', 'color: #6EBE44; font-size: 12px;');
console.log('%c✓ Logo error handling with fallback', 'color: #6EBE44; font-size: 12px;');
console.log('%c🎉 All systems operational!', 'color: #6EBE44; font-size: 14px; font-weight: bold;');
console.log('%cDebug: window.debugNav(), window.testNav("page"), window.testLogo()', 'color: #fbbf24; font-size: 11px;');