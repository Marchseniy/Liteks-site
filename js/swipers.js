class Service {
    constructor(title, description, price, iconUrl) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.iconUrl = iconUrl;
    }
}

class Review {
    constructor(authorName, carName, authorIconUrl, text) {
        this.authorName = authorName;
        this.carName = carName;
        this.authorIconUrl = authorIconUrl;
        this.text = text;
    }
}

const services = [
    [
        new Service('Услуга 1', 'Описание услуги...', 2000, 'img/service-icon.svg'),
        new Service('Услуга 2', 'Описание услуги...', 2000, 'img/service-icon.svg'),
        new Service('Услуга 3', 'Описание услуги...', 2000, 'img/service-icon.svg'),
        new Service('Услуга 4', 'Описание услуги...', 2000, 'img/service-icon.svg'),
        new Service('Услуга 5', 'Описание услуги...', 2000, 'img/service-icon.svg'),
        new Service('Услуга 6', 'Описание услуги...', 2000, 'img/service-icon.svg'),
        new Service('Услуга 7', 'Описание услуги...', 2000, 'img/service-icon.svg'),
        new Service('Услуга 8', 'Описание услуги...', 2000, 'img/service-icon.svg'),
    ],
    [
        new Service('Услуга 9', 'Описание услуги...', 2000, 'img/service-icon.svg'),
        new Service('Услуга 10', 'Описание услуги...', 2000, 'img/service-icon.svg'),
        new Service('Услуга 11', 'Описание услуги...', 2000, 'img/service-icon.svg'),
        new Service('Услуга 12', 'Описание услуги...', 2000, 'img/service-icon.svg'),
        new Service('Услуга 13', 'Описание услуги...', 2000, 'img/service-icon.svg'),
        new Service('Услуга 14', 'Описание услуги...', 2000, 'img/service-icon.svg'),
        new Service('Услуга 15', 'Описание услуги...', 2000, 'img/service-icon.svg'),
        new Service('Услуга 16', 'Описание услуги...', 2000, 'img/service-icon.svg'),
    ],
];

const reviews = [
    new Review('Иван Иванов',
        'Ford Focus',
        'img/user-ava.png',
        'Текст отзыва abcdefghijklmnopqrs 1'),
    new Review('Иван Иванов',
        'Ford Focus',
        'img/user-ava.png',
        'Текст отзыва abcdefghijklmnopqrs 2'),
    new Review('Иван Иванов',
        'Ford Focus',
        'img/user-ava.png',
        'Текст отзыва abcdefghijklmnopqrs 3'),
    new Review('Иван Иванов',
        'Ford Focus',
        'img/user-ava.png',
        'Текст отзыва abcdefghijklmnopqrs 4'),
];

const container = document.querySelector('[data-services-container]');
const template = document.querySelector('#service-card-template');
const listTemplate = document.querySelector('#service-card-list-template');

const fragment = document.createDocumentFragment();

services.forEach(slideGroup => {
    const listClone = listTemplate.content.cloneNode(true);
    const listContainer = listClone.querySelector('.service-card-list');

    slideGroup.forEach(item => {
        const cardClone = template.content.cloneNode(true);

        cardClone.querySelector('.service-card__title').textContent = item.title;
        cardClone.querySelector('.service-card__icon').src = item.iconUrl;
        cardClone.querySelector('.service-card__description').textContent = item.description;
        cardClone.querySelector('.service-card__price').textContent = `${item.price} ₽`;

        listContainer.appendChild(cardClone);
    });

    fragment.appendChild(listClone);
});

container.appendChild(fragment);

const reviewsContainer = document.querySelector('[data-reviews-container]');
const reviewTemplate = document.querySelector('#review-card-template');
reviews.forEach(review => {
    const clone = reviewTemplate.content.cloneNode(true);

    clone.querySelector('.reviews__author-name').textContent = review.authorName;
    clone.querySelector('.reviews__car-name').textContent = review.carName;
    clone.querySelector('.reviews__review-block').textContent = review.text;
    clone.querySelector('.reviews__author-icon').src = review.authorIconUrl;

    reviewsContainer.appendChild(clone);
});

const servicesSwiper = new Swiper('.our-services .mySwiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.services-swiper-button-next',
        prevEl: '.services-swiper-button-prev',
    },
});
servicesSwiper.update();

const reviewsSwiper = new Swiper('.reviews .mySwiper.reviews-swiper', {
    loop: true,
    autoplay: {
        delay: 8 * 1000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.reviews-swiper-button-next',
        prevEl: '.reviews-swiper-button-prev',
    },
});

const videoSwiper = new Swiper('.reviews .mySwiper.video-swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.video-swiper-button-next',
        prevEl: '.video-swiper-button-prev',
    },
});
