// For The First Slider
$('document').ready(()=>{
    let a = 0
    setInterval(()=>{
        a++
        if (a == 3){
           a = -1
           $('#sliderme').attr("src", "ext/images/slider/slider3.jpg")
           $('.first3').addClass('bottom')
           $('.first2').removeClass('bottom')
           $('.first1').removeClass('bottom')
           $('.first0').removeClass('bottom')
        }
        else if (a == 0){
            $('#sliderme').attr("src", "ext/images/slider/slider0.jpg")
            $('.first0').addClass('bottom')
            $('.first1').removeClass('bottom')
            $('.first2').removeClass('bottom')
            $('.first3').removeClass('bottom')
        }

        else if (a == 1){
            $('#sliderme').attr("src", "ext/images/slider/slider1.jpg")
            $('.first1').addClass('bottom')
            $('.first0').removeClass('bottom')
            $('.first2').removeClass('bottom')
            $('.first3').removeClass('bottom')
        }
        else if(a == 2){
            $('#sliderme').attr("src", "ext/images/slider/slider2.jpg")
            $('.first2').addClass('bottom')
            $('.first0').removeClass('bottom')
            $('.first1').removeClass('bottom')
            $('.first3').removeClass('bottom')
        }
    }, 2000)

    // For the Mini Slider
    $('.button2').on("click", ()=>{
        $('.button2').addClass('btn__bg')
        $('.button1').removeClass('btn__bg')
        $('.slide1').css('transform', "translateX(-100%)")
        $('.slide2').css('transform', "translateX(-100%)")
    })
    $('.button1').on("click", ()=>{
        $('.button1').addClass('btn__bg')
        $('.button2').removeClass('btn__bg')
        $('.slide1').css('transform', "translateX(0)")
        $('.slide2').css('transform', "translateX(0)")
    })
    // End of Mini Slider

    // For Third Slider
    $('.buttona').on("click", ()=>{
        $('.main__second-slider-child').css("transform", "translateX(0%)")
        $('.buttona').addClass('radio-blue')
        $('.buttonb').removeClass('radio-blue')
        $('.buttonc').removeClass('radio-blue')
        $('.buttond').removeClass('radio-blue')
        $('.buttone').removeClass('radio-blue')
    })
    $('.buttonb').on("click", ()=>{
        $('.main__second-slider-child').css("transform", "translateX(-20%)")
        $('.buttonb').addClass('radio-blue')
        $('.buttona').removeClass('radio-blue')
        $('.buttonc').removeClass('radio-blue')
        $('.buttond').removeClass('radio-blue')
        $('.buttone').removeClass('radio-blue')
    })
    $('.buttonc').on("click", ()=>{
        $('.main__second-slider-child').css("transform", "translateX(-40%)")
        $('.buttonc').addClass('radio-blue')
        $('.buttonb').removeClass('radio-blue')
        $('.buttona').removeClass('radio-blue')
        $('.buttond').removeClass('radio-blue')
        $('.buttone').removeClass('radio-blue')
    })
    $('.buttond').on("click", ()=>{
        $('.main__second-slider-child').css("transform", "translateX(-60%)")
        $('.buttond').addClass('radio-blue')
        $('.buttonb').removeClass('radio-blue')
        $('.buttonc').removeClass('radio-blue')
        $('.buttona').removeClass('radio-blue')
        $('.buttone').removeClass('radio-blue')
    })
    $('.buttone').on("click", ()=>{
        $('.main__second-slider-child').css("transform", "translateX(-80%)")
        $('.buttone').addClass('radio-blue')
        $('.buttonb').removeClass('radio-blue')
        $('.buttonc').removeClass('radio-blue')
        $('.buttond').removeClass('radio-blue')
        $('.buttona').removeClass('radio-blue')
    })
    // End of Third Slider


})
// End of First Slider