jQuery(document).ready(function ($) {
  /**
   * Check home page
   */
  const checkHome = window.location.href;
  // const siteCheck = vSiteUrl + '/home/';
  const siteCheck = "https://hungphugiaelevator.com";
  // if (checkHome == siteCheck) {
  //     $('.v-header-main').removeClass('d-lg-block');
  //     $('.v-header-main').removeClass('d-xl-block')
  // }

  jQuery("img").attr("loading", "lazy");

  /**
   * Stick Menu
   */
  jQuery(window).scroll(function () {
    var scroll = jQuery(window).scrollTop();
    if (scroll >= 300) {
      jQuery(".header__menu").addClass("fixed");
      jQuery(".header__mobile").addClass("fixed");
    } else {
      jQuery(".header__menu").removeClass("fixed");
      jQuery(".header__mobile").removeClass("fixed");
    }
  });

  /**
   * Back To Top
   */
  var offset = 300,
    offset_opacity = 1200,
    scroll_top_duration = 700,
    jQueryback_to_top = jQuery(".cd-top");
  jQuery(window).scroll(function () {
    jQuery(this).scrollTop() > offset
      ? jQueryback_to_top.addClass("cd-is-visible")
      : jQueryback_to_top.removeClass("cd-is-visible cd-fade-out");
    if (jQuery(this).scrollTop() > offset_opacity) {
      jQueryback_to_top.addClass("cd-fade-out");
    }
  });

  /**
   * Smooth scroll to top
   */
  jQueryback_to_top.on("click", function (event) {
    event.preventDefault();
    jQuery("body,html").animate(
      {
        scrollTop: 0,
      },
      scroll_top_duration
    );
  });

  /**
   * Menu mobile
   */
  $(".hamburger-menu").on("click", menuMobile); //Menu mobile
  $(".js-open-cate").on("click", openCate); // Sub menu mobile
  $(".has-drop-ft").on("click", dropFooterMb); // Menu Footer mobile

  function menuMobile() {
    $(".hamburger-menu .bar").toggleClass("animate"),
      $(".drop-mb").hasClass("active")
        ? ($(".drop-mb").removeClass("active"),
          $(".drop-mb").slideUp(function () {
            $("html,body").css({
              overflow: "auto",
            });
          }))
        : ($(".drop-mb").addClass("active"),
          $(".drop-mb").slideDown(function () {
            $("html,body").css({
              overflow: "hidden",
            });
          }));
  }

  function openCate() {
    var isSlide = !1;
    var o = $(this);
    return (
      isSlide ||
        ((isSlide = !0),
        o.hasClass("active")
          ? (o.removeClass("active"),
            $(".ct-list-cate")
              .stop(!0, !0)
              .slideUp(function () {
                isSlide = !1;
              }))
          : (o.addClass("active"),
            $(".ct-list-cate")
              .stop(!0, !0)
              .slideDown(function () {
                isSlide = !1;
              }))),
      window.addEventListener("click", function (o) {
        ((isSlide = !0), closeCate()) ||
          isSlide ||
          document.getElementById("cateMenu").contains(o.target);
      }),
      !1
    );
  }

  function closeCate() {
    $(".js-open-cate").removeClass("active"),
      $(".ct-list-cate")
        .stop(!0, !0)
        .slideUp(function () {
          isSlide = !1;
        });
  }

  function dropFooterMb() {
    $(window).innerWidth() < 824 &&
      ($(this).hasClass("active")
        ? ($(this).removeClass("active"),
          $(this).next().stop(!0, !0).slideUp(200))
        : ($(".has-drop-ft").removeClass("active"),
          $(".top-ft-content .ct ul").stop(!0, !0).slideUp(200),
          $(this).addClass("active"),
          $(this).next().stop(!0, !0).slideDown(200)));
  }

  /**
   * ================ SLIDER ===================
   */
  new Swiper(".v-main-slider", {
    slidesPerView: 1,
    autoHeight: true,
    loop: true,
    keyboard: true, // dùng bàn phím
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // pagination: {
    //     el: ".swiper-pagination",
    //     // type: "fraction", // hiển thị số lượng
    //     dynamicBullets: true, // icon to nhỏ
    //     clickable: true, // cho phép click
    // }
  });

  new Swiper(".v-testimonial-slider", {
    loop: true,
    mousewheel: false, // dùng chuột
    keyboard: true, // dùng bàn phím
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      // type: "fraction", // hiển thị số lượng
      dynamicBullets: true, // icon to nhỏ
      clickable: true, // cho phép click
    },
    navigation: {
      nextEl: ".v-testimonial-inner .swiper-button-next",
      prevEl: ".v-testimonial-inner .swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      769: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  new Swiper(".v-news-slider", {
    loop: true,
    mousewheel: false, // dùng chuột
    keyboard: true, // dùng bàn phím
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      // type: "fraction", // hiển thị số lượng
      dynamicBullets: true, // icon to nhỏ
      clickable: true, // cho phép click
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      790: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  new Swiper(".v-project-slider", {
    loop: true,
    slidesPerGroup: 1,
    slidesPerColumn: 2,
    slidesPerColumnFill: "row",
    autoHeight: false,
    mousewheel: false, // dùng chuột
    keyboard: true, // dùng bàn phím
    observer: true, // Reload lại swiper: dùng khi có tab
    observeParents: true, // Reload lại swiper: dùng khi có tab
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".v-project .swiper-button-next",
      prevEl: ".v-project .swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerColumn: 1,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 640px
      790: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  new Swiper(".v-team-slider", {
    loop: true,
    mousewheel: false, // dùng chuột
    keyboard: true, // dùng bàn phím
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".v-team .swiper-button-next",
      prevEl: ".v-team .swiper-button-prev",
    },
    pagination: {
      el: ".v-team .swiper-pagination",
      // type: "fraction", // hiển thị số lượng
      dynamicBullets: true, // icon to nhỏ
      clickable: true, // cho phép click
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      790: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  new Swiper(".v-single-related-slider", {
    loop: true,
    mousewheel: false, // dùng chuột
    keyboard: true, // dùng bàn phím
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // pagination: {
    //     el: ".swiper-pagination",
    //     // type: "fraction", // hiển thị số lượng
    //     dynamicBullets: true, // icon to nhỏ
    //     clickable: true, // cho phép click
    // },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  /**
   * JS Nhảy số
   */
  if (checkHome == siteCheck) {
    var a = 0;
    jQuery(window).scroll(function () {
      var oTop = $(".v-about-index").offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
        $(".counter-value").each(function () {
          var $this = $(this),
            countTo = $this.attr("data-count");
          $({
            countNum: $this.text(),
          }).animate(
            {
              countNum: countTo,
            },
            {
              duration: 2000,
              easing: "swing",
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
                //alert('finished');
              },
            }
          );
        });
        a = 1;
      }
    });
  }
});

function singleProdSlider() {
  var galleryThumbs = new Swiper(".v-slider-prod-thumb", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 4,
        centeredSlides: false,
        centeredSlidesBounds: false,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        centeredSlides: false,
        centeredSlidesBounds: false,
        watchOverflow: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        direction: "vertical",
      },
      // when window width is >= 640px
      769: {
        slidesPerView: 5,
        centeredSlides: true,
        centeredSlidesBounds: true,
        watchOverflow: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        direction: "vertical",
      },
    },
  });

  var galleryMain = new Swiper(".v-slider-prod-main", {
    watchOverflow: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    preventInteractionOnTransition: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  });

  galleryMain.on("slideChangeTransitionStart", function () {
    galleryThumbs.slideTo(galleryMain.activeIndex);
  });

  galleryThumbs.on("transitionStart", function () {
    galleryMain.slideTo(galleryThumbs.activeIndex);
  });
}

AOS.init({
  // easing: 'ease-in-out-sine',
  once: true,
});
