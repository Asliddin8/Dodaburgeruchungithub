let count;
$(document).ready(function () {
    $('.basket_modal').slideUp()
    $('.basket').click(function(){
        $('.basket_modal').slideToggle()
        $('.basket_modal_blur').toggleClass('basket_modal_blur_active')
    })
    $('.basket_modal_blur').click(function(){
        $('.basket_modal').slideToggle()
        $('.basket_modal_blur').toggleClass('basket_modal_blur_active')
    })
    $('.breakfasts_card_modal').slideUp()
    $('.breakfasts .more_button').click(function(){
        $('.breakfasts_card_modal').slideToggle()
        $('.breakfasts_card_modal_romove').toggleClass('breakfasts_card_modal_romove_active')
        $('.breakfasts_container').toggleClass('overflow-hidden')
    })
    $('.breakfasts_card_modal_romove').click(function(){
        $('.breakfasts_card_modal').slideUp()
        $('.breakfasts_card_modal_romove').toggleClass('breakfasts_card_modal_romove_active')
    })
    $('.delivery_terms_dropdown_menu').slideUp()
    $('.dropdown_btn').click(function () {
        $('.delivery_terms_dropdown_menu').slideToggle();
    })
    $('.delivery_terms_dropdown_menu .option').click(function () {
        $('.dropdown_btn').children('.dropdown_value').text($(this).text())
        $('.delivery_terms_dropdown_menu').slideToggle();
    })
    $('.your_order_lists .item').each(function (index, element) {
        $(element).children('.your_order_count').children('.minus').click(function () {
            count = $(element).children('.your_order_count').children('.count').text()
            if (count > 1) {
                count--
            }
            $(element).children('.your_order_count').children('.count').text(count)
        })
        $(element).children('.your_order_count').children('.plus').click(function () {
            count = $(element).children('.your_order_count').children('.count').text()
            count++
            $(element).children('.your_order_count').children('.count').text(count)
        })
    })
    $('.payment_method .checkbox').click(function () {
        $(this).toggleClass('checkbox_active')
        $('.payment_method .text').toggleClass('text_active')
        $('.payment_method .bonuses').toggleClass('text_active')
        $('.payment_method .summa .no_discount').toggleClass('span_active')
        $('.payment_method .summa .summa_discount').toggleClass('summa_discount_active')
    })
    $('.payment_method .checkbox2').click(function () {
        $(this).toggleClass('check_ruchnoy_active')
        $('.payment_method .text').toggleClass('text_active')
        $('.payment_method .bonuses').toggleClass('text_active')
        $('.payment_method .summa .no_discount').toggleClass('span_active')
        $('.payment_method .summa .summa_discount').toggleClass('summa_discount_active')
    })
    $('.payment_method .text').click(function () {
        $('.payment_method .text').toggleClass('text_active')
        $('.payment_method .checkbox2').toggleClass('check_ruchnoy_active')
        $('.payment_method .checkbox').toggleClass('checkbox_active')
        $('.payment_method .bonuses').toggleClass('text_active')
        $('.payment_method .summa .no_discount').toggleClass('span_active')
        $('.payment_method .summa .summa_discount').toggleClass('summa_discount_active')
    })

    $('.delivery_terms_menu').slideUp()
    $('.menu_active').slideDown()

    $('.delivery_terms_buttons button').click(function () {
        $('.delivery_terms_buttons button').removeClass('active')
        $(this).addClass('active')
        if ($(this).hasClass('menu_active')) {
            $('.delivery_terms_menu').slideUp()
            $('.menu_active').slideDown()
        } else {
            $('.delivery_terms_menu').slideUp()
            $('.menu_active2').slideDown()
        }
    })
    $('.payment_method_menu').slideUp()
    $('.payment_method .by_map_menu').slideDown()
    $('.payment_method_buttons button').click(function () {
        if ($(this).hasClass('by_map_button')) {
            $('.payment_method_menu').slideUp()
            $('.payment_method .by_map_menu').slideDown()
        } else {
            $('.payment_method_menu').slideUp()
            $('.payment_method .cash_menu').slideDown()
        }
        $('.payment_method_buttons button').removeClass('active')
        $('.payment_method .active').slideDown()
        $(this).addClass('active')

    })
      $(".img_heart_wrapper").each(function () {
        let heart_active = $(this).children(".heart_active")
          $(this).click(function(){
            heart_active.toggleClass('heart_active_index')
          })
      });
})

let header_scroll = document.querySelector('.header_scroll');

window.addEventListener('scroll', function(){
    document.querySelector('.basket_modal').classList.toggle('basket_modal_active', window.scrollY > 20)
    header_scroll.classList.toggle('header_scroll_active', window.scrollY > 20)
})

let swiper = new Swiper(".headerSwiper", {
    slidesPerView: 3,
    navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-btn-prev",
      },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 3,
        },
        700: {
            slidesPerView: 5,
        },
    },
});
let breakfasts_card_swiper = new Swiper(".breakfasts_card_swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
      },
  });