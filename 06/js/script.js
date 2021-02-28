//$(function(){
//   $(".btn1").click(function(){
//     $("h1").text("I am Learning jquery");             
//    }); 
//});

$(function(){
   $(".btn1").click(function(){
     $("h1").text(function(i, originalVal){
         return originalVal + " Ignius Tech";
     });            
    }); 
});

$(function(){
   $(".btn2").click(function(){
     $("h1").html("<i>I am good at jquery</i>");
   });
});

$(function(){
   $(".btn3").click(function(){
     $("input").val("Paris");
   }) 
});

$(function(){
   $(".btn4").click(function(){
     $("a").attr({
         "href" : "https://bing.com",
         "title" : "The result is going to bing site"
     });
   }) 
});