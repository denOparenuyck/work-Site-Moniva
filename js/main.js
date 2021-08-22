window.addEventListener('DOMContentLoaded', () => {


    /*=============================OPEN-HIDE-WINDOW==============================*/
    class ShowBlock {
        constructor(btnOpen, btnClose, sectionHide, activeClass) {
            this.btnOpen = document.querySelector(btnOpen);
            this.btnClose = document.querySelector(btnClose);
            this.sectionHide = document.querySelector(sectionHide);
            this.active = activeClass;
        }


        openSection() {
            if (this.btnOpen) {
                this.btnOpen.addEventListener('click', () => {
                    this.sectionHide.classList.add(this.active);
                    document.body.style.overflowY = 'hidden';
                });
            }
        }

        closeSection() {
            if (this.btnClose) {
                this.btnClose.addEventListener('click', () => {
                    this.sectionHide.classList.remove(this.active);
                    document.body.style.overflowY = 'auto';
                });
            }
        }
        activeBlock() {
            this.openSection();
            this.closeSection();
        }
    }
    new ShowBlock(
        '.header-menu',
        '.menu__close',
        '.menu__bg',
        'menu--active'
    ).activeBlock();

    new ShowBlock(
        '.header-info__icon',
        '.pop-up__close',
        '.pop-up',
        'pop-up--active'
    ).activeBlock();

    new ShowBlock(
        '.spare-part-card__filtr',
        '.filter-section__close',
        '.filter-section',
        'filter-section--active'
    ).activeBlock();


    /*=============================/OPEN-HIDE-WINDOW==============================*/




    /*=============================ACTIVE-CHECKBOX==============================*/
    const checkbox = document.querySelectorAll('.spare-part-left-side__block-list-item-checkbox'),
        checkboxText = document.querySelectorAll('.label-checkbox__text'),
        checkboxNumber = document.querySelectorAll('.label-checkbox__number'),
        inputCheckbox = document.querySelectorAll('.label-checkbox__input');



    inputCheckbox.forEach((item, index) => {
        item.addEventListener('change', () => {
            if (item.checked) {
                activeCheckbox(index);
            } else {
                closeCheckbox(index);
            }
        });
    });

    function activeCheckbox(n) {
        checkboxText[n].classList.add('active--checkbox-text');
        checkboxNumber[n].classList.add('active--checkbox-number');
    }

    function closeCheckbox(n) {
        checkboxText[n].classList.remove('active--checkbox-text');
        checkboxNumber[n].classList.remove('active--checkbox-number');
    }
    /*=============================/ACTIVE-CHECKBOX==============================*/



    /*=============================ACCORDION==============================*/
    const accordionBtn = document.querySelectorAll('.feature-questions__often-accordion-btn');


    accordionBtn.forEach(item => {
        item.addEventListener('click', () => {
            item.parentNode.classList.toggle('active--accordion');
        });
    });
    /*=============================/ACCORDION==============================*/



    /*=============================SLIDER==============================*/

    class Slider {
        constructor(slideToScroll, slides, btnPrev, btnNext, slidesWrapper, slidesField) {
            this.slides = document.querySelectorAll(slides);
            this.btnPrev = document.querySelector(btnPrev);
            this.btnNext = document.querySelector(btnNext);
            this.slidesWrapper = document.querySelector(slidesWrapper);
            this.slidesField = document.querySelector(slidesField);
            this.width = this.slidesWrapper.offsetWidth;
            this.slideToScroll = slideToScroll;
            this.slideIndex = 0;
            this.offset = 0;
            this.activePrev();
            this.activeNext();
            this.setPosition();
            this.activeDots();
            this.determineWidth();
        }

        determineWidth() {
            this.slidesField.style.width = 100 * this.slides.length + '%';
            this.slides.forEach(slide => {
                slide.style.width = this.width;
            });
        }



        activeNext() {
            console.log(this.width);
            if (this.btnNext) {
                this.btnNext.addEventListener('click', () => {
                    if (this.offset == this.width * (this.slides.length - 1)) {
                        this.offset = 0;
                        this.slideIndex = 0;
                    } else {
                        this.offset += this.width * this.slideToScroll;
                        this.slideIndex++;
                    }
                    this.activeDots(this.slideIndex);
                    this.setPosition();
                });
            }

        }

        activePrev() {
            if (this.btnPrev) {
                this.btnPrev.addEventListener('click', () => {
                    if (this.offset == 0) {
                        this.offset = this.width * (this.slides.length - 1);
                        this.slideIndex = this.slides.length - 1;
                    } else {
                        this.offset -= this.width * this.slideToScroll;
                        this.slideIndex--;
                    }
                    this.activeDots(this.slideIndex);
                    this.setPosition();
                });
            }

        }

        activeDots(i = 0) {
            const dots = document.querySelectorAll('.compare-slider__dots-list-item');

            dots.forEach((dot, dotIndex) => {
                dot.classList.remove('compare-slider__dots-list-item--active');

                if (dot) {
                    dot.addEventListener('click', () => {
                        this.slideIndex = dotIndex;
                        this.activeDots(this.slideIndex);
                        this.offset = this.width * this.slideIndex;
                        this.setPosition();
                        console.log(this.slideIndex);
                    });
                }
            });
            dots[i].classList.add('compare-slider__dots-list-item--active');
        }

        setPosition() {
            this.slidesField.style.transform = `translateX(-${this.offset}px)`;
        }

    


    }

    new Slider(
        1,
        '.compare-slider__item',
        '.compare-slider__buttonts-prev',
        '.compare-slider__buttonts-next',
        '.compare-slider',
        '.compare-slider__track'
    );


    new Slider(
        1,
        '.reviews-slider__item',
        '.reviews-panel-control__arrow-prev',
        '.reviews-panel-control__arrow-next',
        '.reviews-slider',
        '.reviews-slider__track'
    );


    /*=============================/SLIDER==============================*/







});