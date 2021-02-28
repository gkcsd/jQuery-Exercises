
// $(document).ready(function(){
//     $("h1").click(function(){
//         $(".sample").slideToggle(1000, function(){
//             alert("Animation Complete")
//         });
//     });
// });



$(document).ready(function(){
    $("h1").click(function(){
        $(".sample").css("background-color", "blue",)
        .slideUp(2000)
        .slideDown(1500)
    });
});
