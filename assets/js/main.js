/*=== Javascript function indexing hear===========

1.counterUp ----------(Its use for counting number)
2.stickyHeader -------(header class sticky)
3.wowActive ----------( Waw js plugins activation)
4.swiperJs -----------(All swiper in this website hear)
5.salActive ----------(Sal animation for card and all text)
6.textChanger --------(Text flip for banner section)
7.timeLine -----------(History Time line)
8.datePicker ---------(On click date calender)
9.timePicker ---------(On click time picker)
10.timeLineStory -----(History page time line)
11.vedioActivation----(Vedio activation)
12.searchOption ------(search open)
13.cartBarshow -------(Cart sode bar)
14.sideMenu ----------(Open side menu for desktop)
15.Back to top -------(back to top)
16.filterPrice -------(Price filtering)

==================================================*/

(function($) {
    'use strict';

    var rtsJs = {
        m: function(e) {
            rtsJs.d();
            rtsJs.methods();
        },
        d: function(e) {
            this._window = $(window),
                this._document = $(document),
                this._body = $('body'),
                this._html = $('html')
        },
        methods: function(e) {
            rtsJs.metismenu();
            rtsJs.afterBefore();
            rtsJs.swiperActive();
            rtsJs.wowActive();
            rtsJs.stickyHeader();
            rtsJs.backToTopInit();
            rtsJs.sideMenu();
            rtsJs.niceSelect();
            rtsJs.vedioActivation();
            rtsJs.menuCurrentLink();
            rtsJs.preloader();
            rtsJs.datePicker();
        },


        metismenu: function() {
            $('#mobile-menu-active').metisMenu();
        },

        afterBefore: function() {
            $(document).ready(function() {

                if ($(".comparison-slider")[0]) {
                    let compSlider = $(".comparison-slider");

                    compSlider.each(function() {
                        let compSliderWidth = $(this).width() + "px";
                        $(this).find(".resize img").css({
                            width: compSliderWidth
                        });
                        drags($(this).find(".divider"), $(this).find(".resize"), $(this));
                    });

                    $(window).on("resize", function() {
                        let compSliderWidth = compSlider.width() + "px";
                        compSlider.find(".resize img").css({
                            width: compSliderWidth
                        });
                    });
                }
            });

            function drags(dragElement, resizeElement, container) {

                let touched = false;
                window.addEventListener('touchstart', function() {
                    touched = true;
                });
                window.addEventListener('touchend', function() {
                    touched = false;
                });

                dragElement.on("mousedown touchstart", function(e) {

                    dragElement.addClass("draggable");
                    resizeElement.addClass("resizable");
                    //create vars
                    let startX = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX;
                    let dragWidth = dragElement.outerWidth();
                    let posX = dragElement.offset().left + dragWidth - startX;
                    let containerOffset = container.offset().left;
                    let containerWidth = container.outerWidth();
                    let minLeft = containerOffset + 10;
                    let maxLeft = containerOffset + containerWidth - dragWidth - 10;

                    dragElement.parents().on("mousemove touchmove", function(e) {

                        if (touched === false) {
                            e.preventDefault();
                        }

                        let moveX = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX;
                        let leftValue = moveX + posX - dragWidth;

                        if (leftValue < minLeft) {
                            leftValue = minLeft;
                        } else if (leftValue > maxLeft) {
                            leftValue = maxLeft;
                        }

                        let widthValue = (leftValue + dragWidth / 2 - containerOffset) * 100 / containerWidth + "%";

                        $(".draggable").css("left", widthValue).on("mouseup touchend touchcancel", function() {
                            $(this).removeClass("draggable");
                            resizeElement.removeClass("resizable");
                        });

                        $(".resizable").css("width", widthValue);

                    }).on("mouseup touchend touchcancel", function() {
                        dragElement.removeClass("draggable");
                        resizeElement.removeClass("resizable");

                    });

                }).on("mouseup touchend touchcancel", function(e) {
                    dragElement.removeClass("draggable");
                    resizeElement.removeClass("resizable");

                });

            }


        },

        swiperActive: function() {
            $(document).ready(function() {
                var swiper = new Swiper(".swiper-container-h1", {
                    spaceBetween: 30,
                    slidesPerView: 3,
                    loop: true,
                    speed: 1000,
                    // autoplay: {
                    //   delay: 3000,
                    //   disableOnInteraction: false,
                    // },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                    },
                    breakpoints: {
                        1500: {
                            slidesPerView: 3,
                        },
                        1199: {
                            slidesPerView: 3,
                        },
                        991: {
                            slidesPerView: 2,
                        },
                        767: {
                            slidesPerView: 2,
                        },
                        575: {
                            slidesPerView: 1,
                        },
                        0: {
                            slidesPerView: 1,
                        }
                    },
                });
            });

            $(document).ready(function() {
                var swiper = new Swiper(".team-swiper-container-h1", {
                    spaceBetween: 30,
                    slidesPerView: 4,
                    loop: true,
                    speed: 1000,
                    // autoplay: {
                    //   delay: 3000,
                    //   disableOnInteraction: false,
                    // },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                    },
                    breakpoints: {
                        1500: {
                            slidesPerView: 4,
                        },
                        1199: {
                            slidesPerView: 3,
                        },
                        991: {
                            slidesPerView: 2,
                        },
                        767: {
                            slidesPerView: 2,
                        },
                        575: {
                            slidesPerView: 1,
                        },
                        0: {
                            slidesPerView: 1,
                        }
                    },
                });
            });

            $(document).ready(function() {
                var swiper = new Swiper(".swiper-container-h1-team", {
                    spaceBetween: 30,
                    slidesPerView: 4,
                    loop: true,
                    speed: 1000,
                    autoplay: {
                        delay: 2000,
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                    },
                    breakpoints: {
                        1500: {
                            slidesPerView: 3,
                        },
                        1199: {
                            slidesPerView: 3,
                        },
                        991: {
                            slidesPerView: 3,
                        },
                        767: {
                            slidesPerView: 2,
                        },
                        575: {
                            slidesPerView: 1,
                        },
                        0: {
                            slidesPerView: 1,
                        }
                    },
                });
            });
            $(document).ready(function() {
                var swiper = new Swiper(".swiper-container-h1-team-8", {
                    spaceBetween: 150,
                    slidesPerView: 4,
                    loop: true,
                    speed: 1000,
                    autoplay: {
                        delay: 2000,
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                    },
                    breakpoints: {
                        1500: {
                            slidesPerView: 3,
                        },
                        1199: {
                            slidesPerView: 3,
                        },
                        991: {
                            slidesPerView: 3,
                        },
                        767: {
                            slidesPerView: 2,
                        },
                        575: {
                            slidesPerView: 1,
                        },
                        0: {
                            slidesPerView: 1,
                        }
                    },
                });
            });

            $(document).ready(function() {

                var swiper = new Swiper(".swiper-container-h3", {
                    spaceBetween: 30,
                    slidesPerView: 4,
                    loop: true,
                    speed: 1000,
                    autoplay: {
                        delay: 2000,
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    breakpoints: {
                        1500: {
                            slidesPerView: 3,
                        },
                        1199: {
                            slidesPerView: 3,
                        },
                        991: {
                            slidesPerView: 2,
                        },
                        767: {
                            slidesPerView: 2,
                        },
                        575: {
                            slidesPerView: 1,
                        },
                        0: {
                            slidesPerView: 1,
                        }
                    },
                });
            });

            $(document).ready(function() {
                var swiper = new Swiper(".swiper-container-h1.v3", {
                    spaceBetween: 30,
                    slidesPerView: 4,
                    loop: true,
                    speed: 1000,
                    autoplay: {
                        delay: 2000,
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                    },
                });
                $('a[data-bs-toggle="tab"]').on('shown.bs.tab', function(e) {
                    // Update Swiper when the tab with swiper is shown
                    swiper.update();
                });
            });


            $(document).ready(function() {
                var swiper = new Swiper(".swiper-container-h2", {
                    spaceBetween: 30,
                    slidesPerView: 4,
                    loop: true,
                    speed: 1000,
                    autoplay: {
                        delay: 2000,
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                    },
                    breakpoints: {
                        1500: {
                            slidesPerView: 3,
                        },
                        1199: {
                            slidesPerView: 3,
                        },
                        991: {
                            slidesPerView: 2,
                        },
                        767: {
                            slidesPerView: 2,
                        },
                        575: {
                            slidesPerView: 1,
                        },
                        0: {
                            slidesPerView: 1,
                        }
                    },
                });
            });

            $(document).ready(function() {
                var swiper = new Swiper(".mySwiper-banner-2", {
                    spaceBetween: 0,
                    slidesPerView: 1,
                    loop: true,
                    speed: 2000,
                    effect: "fade",
                    autoplay: {
                        delay: 4000,
                        disableOnInteraction: false,
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                });
            });
            $(document).ready(function() {
                var swiper = new Swiper(".mySwiper-banner-eight", {
                    spaceBetween: 0,
                    slidesPerView: 1,
                    loop: true,
                    speed: 1000,
                    effect: "fade",
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false,
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                });
            });

            $(document).ready(function() {
                var swiper = new Swiper(".mySwiper-brand", {
                    spaceBetween: 65,
                    slidesPerView: 5,
                    loop: true,
                    speed: 2000,
                    autoplay: {
                        delay: 4000,
                        disableOnInteraction: false,
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    breakpoints: {
                        1500: {
                            slidesPerView: 4,
                        },
                        1199: {
                            slidesPerView: 4,
                        },
                        991: {
                            slidesPerView: 4,
                        },
                        767: {
                            slidesPerView: 3,
                        },
                        575: {
                            slidesPerView: 3,
                        },
                        0: {
                            slidesPerView: 2,
                        }
                    },
                });
            });

            $(document).ready(function() {
                var swiper = new Swiper(".mySwiper-service-dental", {
                    spaceBetween: 30,
                    slidesPerView: 4,
                    loop: true,
                    speed: 2000,
                    autoplay: {
                        delay: 4000,
                        disableOnInteraction: false,
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    breakpoints: {
                        1500: {
                            slidesPerView: 4,
                        },
                        1199: {
                            slidesPerView: 3,
                        },
                        991: {
                            slidesPerView: 2,
                        },
                        767: {
                            slidesPerView: 2,
                        },
                        575: {
                            slidesPerView: 1,
                        },
                        0: {
                            slidesPerView: 2,
                        }
                    },
                });
            });

            $(document).ready(function() {
                var swiper = new Swiper(".mySwiper-banner-seven", {
                    spaceBetween: 0,
                    slidesPerView: 1,
                    loop: true,
                    speed: 2000,
                    effect: 'fade',
                    autoplay: {
                        delay: 4000,
                        disableOnInteraction: false,
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                });
            });

            $(document).ready(function() {
                var swiper = new Swiper(".mySwiper-portfolio", {
                    spaceBetween: 0,
                    slidesPerView: 1,
                    loop: true,
                    speed: 1000,
                    effect: 'fade',
                    autoplay: {
                        delay: 1500,
                        disableOnInteraction: false,
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                });
            });
            $(document).ready(function() {
                var swiper = new Swiper(".mySwiper-testimonials-2", {
                    spaceBetween: 0,
                    slidesPerView: 1,
                    loop: true,
                    speed: 500,
                    // autoplay: {
                    //   delay: 2000,
                    // },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true
                    },
                });
            });
        },

        wowActive: function() {
            new WOW().init();
        },

        stickyHeader: function(e) {
            $(window).scroll(function() {
                if ($(this).scrollTop() > 150) {
                    $('.header--sticky').addClass('sticky')
                } else {
                    $('.header--sticky').removeClass('sticky')
                }
            })
        },

        backToTopInit: function() {
            $(document).ready(function() {
                "use strict";

                var progressPath = document.querySelector('.progress-wrap path');
                var pathLength = progressPath.getTotalLength();
                progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
                progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
                progressPath.style.strokeDashoffset = pathLength;
                progressPath.getBoundingClientRect();
                progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
                var updateProgress = function() {
                    var scroll = $(window).scrollTop();
                    var height = $(document).height() - $(window).height();
                    var progress = pathLength - (scroll * pathLength / height);
                    progressPath.style.strokeDashoffset = progress;
                }
                updateProgress();
                $(window).scroll(updateProgress);
                var offset = 50;
                var duration = 550;
                jQuery(window).on('scroll', function() {
                    if (jQuery(this).scrollTop() > offset) {
                        jQuery('.progress-wrap').addClass('active-progress');
                    } else {
                        jQuery('.progress-wrap').removeClass('active-progress');
                    }
                });
                jQuery('.progress-wrap').on('click', function(event) {
                    event.preventDefault();
                    jQuery('html, body').animate({
                        scrollTop: 0
                    }, duration);
                    return false;
                })


            });
        },

        sideMenu: function() {

            // collups menu side right
            $(document).on('click', '#menu-btn', function() {
                $("#side-bar").addClass("show");
                $("#anywhere-home").addClass("bgshow");
            });
            $(document).on('click', '.close-icon-menu', function() {
                $("#side-bar").removeClass("show");
                $("#anywhere-home").removeClass("bgshow");
            });
            $(document).on('click', '#anywhere-home', function() {
                $("#side-bar").removeClass("show");
                $("#anywhere-home").removeClass("bgshow");
            });
            $(document).on('click', '.onepage .mainmenu li a', function() {
                $("#side-bar").removeClass("show");
                $("#anywhere-home").removeClass("bgshow");
            });
        },


        niceSelect: function() {

            (function($) {

                $.fn.niceSelect = function(method) {

                    // Methods
                    if (typeof method == 'string') {
                        if (method == 'update') {
                            this.each(function() {
                                var $select = $(this);
                                var $dropdown = $(this).next('.nice-select');
                                var open = $dropdown.hasClass('open');

                                if ($dropdown.length) {
                                    $dropdown.remove();
                                    create_nice_select($select);

                                    if (open) {
                                        $select.next().trigger('click');
                                    }
                                }
                            });
                        } else if (method == 'destroy') {
                            this.each(function() {
                                var $select = $(this);
                                var $dropdown = $(this).next('.nice-select');

                                if ($dropdown.length) {
                                    $dropdown.remove();
                                    $select.css('display', '');
                                }
                            });
                            if ($('.nice-select').length == 0) {
                                $(document).off('.nice_select');
                            }
                        } else {
                            console.log('Method "' + method + '" does not exist.')
                        }
                        return this;
                    }

                    // Hide native select
                    this.hide();

                    // Create custom markup
                    this.each(function() {
                        var $select = $(this);

                        if (!$select.next().hasClass('nice-select')) {
                            create_nice_select($select);
                        }
                    });

                    function create_nice_select($select) {
                        $select.after($('<div></div>')
                            .addClass('nice-select')
                            .addClass($select.attr('class') || '')
                            .addClass($select.attr('disabled') ? 'disabled' : '')
                            .attr('tabindex', $select.attr('disabled') ? null : '0')
                            .html('<span class="current"></span><ul class="list"></ul>')
                        );

                        var $dropdown = $select.next();
                        var $options = $select.find('option');
                        var $selected = $select.find('option:selected');

                        $dropdown.find('.current').html($selected.data('display') || $selected.text());

                        $options.each(function(i) {
                            var $option = $(this);
                            var display = $option.data('display');

                            $dropdown.find('ul').append($('<li></li>')
                                .attr('data-value', $option.val())
                                .attr('data-display', (display || null))
                                .addClass('option' +
                                    ($option.is(':selected') ? ' selected' : '') +
                                    ($option.is(':disabled') ? ' disabled' : ''))
                                .html($option.text())
                            );
                        });
                    }

                    /* Event listeners */

                    // Unbind existing events in case that the plugin has been initialized before
                    $(document).off('.nice_select');

                    // Open/close
                    $(document).on('click.nice_select', '.nice-select', function(event) {
                        var $dropdown = $(this);

                        $('.nice-select').not($dropdown).removeClass('open');
                        $dropdown.toggleClass('open');

                        if ($dropdown.hasClass('open')) {
                            $dropdown.find('.option');
                            $dropdown.find('.focus').removeClass('focus');
                            $dropdown.find('.selected').addClass('focus');
                        } else {
                            $dropdown.focus();
                        }
                    });

                    // Close when clicking outside
                    $(document).on('click.nice_select', function(event) {
                        if ($(event.target).closest('.nice-select').length === 0) {
                            $('.nice-select').removeClass('open').find('.option');
                        }
                    });

                    // Option click
                    $(document).on('click.nice_select', '.nice-select .option:not(.disabled)', function(event) {
                        var $option = $(this);
                        var $dropdown = $option.closest('.nice-select');

                        $dropdown.find('.selected').removeClass('selected');
                        $option.addClass('selected');

                        var text = $option.data('display') || $option.text();
                        $dropdown.find('.current').text(text);

                        $dropdown.prev('select').val($option.data('value')).trigger('change');
                    });

                    // Keyboard events
                    $(document).on('keydown.nice_select', '.nice-select', function(event) {
                        var $dropdown = $(this);
                        var $focused_option = $($dropdown.find('.focus') || $dropdown.find('.list .option.selected'));

                        // Space or Enter
                        if (event.keyCode == 32 || event.keyCode == 13) {
                            if ($dropdown.hasClass('open')) {
                                $focused_option.trigger('click');
                            } else {
                                $dropdown.trigger('click');
                            }
                            return false;
                            // Down
                        } else if (event.keyCode == 40) {
                            if (!$dropdown.hasClass('open')) {
                                $dropdown.trigger('click');
                            } else {
                                var $next = $focused_option.nextAll('.option:not(.disabled)').first();
                                if ($next.length > 0) {
                                    $dropdown.find('.focus').removeClass('focus');
                                    $next.addClass('focus');
                                }
                            }
                            return false;
                            // Up
                        } else if (event.keyCode == 38) {
                            if (!$dropdown.hasClass('open')) {
                                $dropdown.trigger('click');
                            } else {
                                var $prev = $focused_option.prevAll('.option:not(.disabled)').first();
                                if ($prev.length > 0) {
                                    $dropdown.find('.focus').removeClass('focus');
                                    $prev.addClass('focus');
                                }
                            }
                            return false;
                            // Esc
                        } else if (event.keyCode == 27) {
                            if ($dropdown.hasClass('open')) {
                                $dropdown.trigger('click');
                            }
                            // Tab
                        } else if (event.keyCode == 9) {
                            if ($dropdown.hasClass('open')) {
                                return false;
                            }
                        }
                    });

                    // Detect CSS pointer-events support, for IE <= 10. From Modernizr.
                    var style = document.createElement('a').style;
                    style.cssText = 'pointer-events:auto';
                    if (style.pointerEvents !== 'auto') {
                        $('html').addClass('no-csspointerevents');
                    }

                    return this;

                };

            }(jQuery));

            /* Initialize */

            $(document).ready(function() {
                $('select').niceSelect();
            });

        },

        vedioActivation: function() {
            $(document).ready(function() {
                $('.popup-youtube, .popup-video').magnificPopup({
                    type: 'iframe',
                    mainClass: 'mfp-fade',
                    removalDelay: 160,
                    preloader: false,
                    fixedContentPos: false
                });
            });
        },

        menuCurrentLink: function() {
            var currentPage = location.pathname.split("/"),
                current = currentPage[currentPage.length - 1];
            $('.parent-nav li > a').each(function() {
                var $this = $(this);
                if ($this.attr('href') === current) {
                    $this.addClass('active');
                    $this.parents('.has-dropdown').addClass('menu-item-open')
                }
            });
        },


        preloader: function() {
            window.addEventListener('load', function() {
                document.querySelector('body').classList.add("loaded")
            });
        },

        datePicker: function() {
            $(function() {
                $("#datepicker").datepicker({
                    dateFormat: "dd-mm-yy",
                    duration: "fast"
                });
            });
        },


    }

    rtsJs.m();
})(jQuery, window)