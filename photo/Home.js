let index = 0

let Carousel_left = $('.Carousel>img')
let Carousel_right_01 = $('.Carousel li:first-child>img').click(function() {
    Carousel_left.attr("src", "/photo/cat" + 1 + ".jpg")
    Carousel_right_01.addClass('move')
    index = 0

})
let Carousel_right_02 = $('.Carousel li:nth-of-type(2)>img').click(function() {
    Carousel_left.attr("src", "/photo/cat" + 2 + ".jpg")
    Carousel_right_02.addClass('move')
    index = 1
})
let Carousel_right_03 = $('.Carousel li:nth-of-type(3)>img').click(function() {
    Carousel_left.attr("src", "/photo/cat" + 3 + ".jpg")
    Carousel_right_03.addClass('move')
    index = 2
})
let Carousel_right_04 = $('.Carousel li:nth-of-type(4)>img').click(function() {
    Carousel_left.attr("src", "/photo/cat" + 4 + ".jpg")
    Carousel_right_04.addClass('move')
    index = 3
})
Carousel_right_01.mouseleave(function() {
    for (let i = 0; i < 4; i++) {
        Carousel_right.eq(i).stop()
    }
    Carousel_right_01.removeClass('move')
})
Carousel_right_02.mouseleave(function() {
    for (let i = 0; i < 4; i++) {
        Carousel_right.eq(i).stop()
    }
    Carousel_right_02.removeClass('move')
})
Carousel_right_03.mouseleave(function() {
    for (let i = 0; i < 4; i++) {
        Carousel_right.eq(i).stop()
    }
    Carousel_right_03.removeClass('move')
})
Carousel_right_04.mouseleave(function() {
    for (let i = 0; i < 4; i++) {
        Carousel_right.eq(i).stop()
    }
    Carousel_right_04.removeClass('move')
})
let Carousel_right = $('.Carousel li')





let time = setInterval(function() {
    for (let i = 0; i < 4; i++) {
        Carousel_right.eq(i).removeClass('move')
    }
    if (index < 4) {
        Carousel_left.attr('src', "/photo/cat" + [index + 1] + ".jpg")
        Carousel_right.eq(index).addClass('move')
        index++


    }
    if (index == 4) {
        index = 0
    }


}, 1500)