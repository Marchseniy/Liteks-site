const animationsSource = {
    ['header']: {
        ['hero-block__main-title']: 'down-move-animation',
        ['hero-block__make-btn']: 'up-move-animation',
    },
    ['our-services']: {
        ['our-services__title']: 'down-move-animation',
        ['slider-wrapper']: 'down-move-animation',
    },
    ['liteks-its']: {
        ['liteks-its__title']: 'down-move-animation',
        ['liteks-its__circle']: 'scale-on-animation',
        ['liteks-its__second-part']: 'left-move-animation',
    },
    ['why-liteks']: {
        ['why-liteks__title']: 'down-move-animation',
        ['why-liteks__text']: 'down-move-animation',
        ['why-liteks__reasons-item']: 'right-move-animation',
        ['why-liteks__img-block']: 'left-move-animation',
    },
    ['reviews']: {
        ['reviews__title']: 'down-move-animation',
        ['slider-wrapper']: 'down-move-animation',
    },
    ['location']: {
        ['location__title']: 'down-move-animation',
        ['location__address']: 'up-move-animation',
        ['location__map-container']: 'up-move-animation',
    },
};

function getAnimationsFromSource(source) {
    const result = {};

    Object.entries(source).forEach(([sectionId, elems]) => {
        result[sectionId] = [];

        Object.entries(elems).forEach(([className, animationClass]) => {
            const elements = document.querySelectorAll(`#${sectionId} .${className}`);

            result[sectionId].push({
                elements,
                animationClass,
            });
        });
    });

    return result;
}

const animations = getAnimationsFromSource(animationsSource);
Object.keys(animations).forEach(sectId => {
    animations[sectId].forEach((item) => {
        if (item.elements) {
            item.elements.forEach((element) => {
                element.style.visibility = 'hidden';
            });
        }
    });
});

const heroBtn = document.querySelector('[data-hero-btn]');
const closeModalBtn = document.querySelector('[data-close-modal-window-btn]');
const modalWindow = document.querySelector('[data-modal-window]');
const navItems = document.querySelectorAll('.head__list-item');

heroBtn.addEventListener('click', (e) => {
    modalWindow.classList.toggle('modal-window--hidden');
});

closeModalBtn.addEventListener('click', (e) => {
    modalWindow.classList.toggle('modal-window--hidden');
});

navItems.forEach(btn => {
    btn.addEventListener('click', (e) => {
        navItems.forEach(btn => {
            btn.classList.remove('head__list-item--active');
        });
        btn.classList.add('head__list-item--active');
    });
});

const sections = document.querySelectorAll('section[id]');
const header = document.querySelector('#header');

const sectionMap = {};
navItems.forEach(item => {
    const link = item.querySelector('a');
    if (link) {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            const sectionId = href.replace('#', '');
            sectionMap[sectionId] = item;
        }
    }
});

function activateItem(id) {
    navItems.forEach(item => item.classList.remove('head__list-item--active'));
    if (sectionMap[id]) {
        sectionMap[id].classList.add('head__list-item--active');
    }
}

function onSectionActivate(sectionId) {
    activateItem(sectionId);

    if (!animations || !animations[sectionId]) {
        return;
    }

    animations[sectionId].forEach((item) => {
        item.elements.forEach((element) => {
            if (element.hasAttribute('data-anim-delay')) {
                const delay = element.getAttribute('data-anim-delay');
                setTimeout(() => {
                    element.classList.add(item.animationClass);
                }, Number(delay));
            } else {
                element.classList.add(item.animationClass);
            }
        });
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            onSectionActivate(entry.target.id);
        }
    });
}, {
    threshold: 0.25,
    rootMargin: '-85px 0px 0px 0px',
});

sections.forEach(section => observer.observe(section));
observer.observe(header);

const burger = document.getElementById('burger');
const nav = document.querySelector('.head__navigation');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
});
