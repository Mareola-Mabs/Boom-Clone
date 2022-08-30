// jQuery.Ready Function
$('document').ready(
    function(){

        // Removing Mobile Highlight Tap Color
        $('body').css("webkitTapHighlightColor", "transparent")

        // For Mobile Navigation
        const hamburger = $('.header__burger > button')
        const mobile = $('.header__mobile')
        hamburger.on("click", ()=>{
            hamburger.toggleClass('outline')
            mobile.toggleClass('height')

        })
        // End of Mobile Navigation

        // For Responsive Margin Top Of Main
        let headerHeight = $('header').innerHeight()
        let headerHeight1 = headerHeight + 12
         $('main').css("marginTop", headerHeight1+"px")

        function headerDist(){
            let headerHeight = $('header').innerHeight()
            let headerHeight1 = headerHeight + 12
             $('main').css("marginTop", headerHeight1+"px")
        }


        $(window).resize(()=>{
            return headerDist()
        })
        // End of Main

        // For Close of Top Header
        $('#close__chat').on("click", ()=>{
            $('.header__top').css("display", "none")
            let headerHeight = $('header').innerHeight()
            let headerHeight1 = headerHeight + 12
             $('main').css("marginTop", headerHeight1+"px")
           
        })
        // End of Close of Top Header

        // For ScrollTop
        $(window).on("scroll", ()=>{
            if (document.documentElement.scrollTop > 20 || document.body.scrollTop > 20){
                $('.scrolltop').addClass('opac')
            }

            else{
                $('.scrolltop').removeClass('opac')
            }
        });

        $('.scrolltop').on("click", ()=>{
            document.documentElement.scrollTop  = 0
            document.body.scrollTop = 0
        })
        // End of ScrollTop


    }
)