// $(document).ready(function(){
//     $("h1").click(function(){
//         $("img").fadeOut(100);
//     });
// });

// $(document).ready(function(){
//     $("h1").click(function(){
//         $(".sample").slideToggle("fast");
//     });
// });

$(document).ready(function(){
    $("h1").click(function(){
        $(".sample").animate({
            height:'+=100px',
            width: '+=200px'
        }, 1000);
    });
});