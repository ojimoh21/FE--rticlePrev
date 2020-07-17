$(".share").click(function(){
    
    $(".socials").addClass("icons");
    $(".box").css("height", "410px");

    $(".box").hover(function(){
        $(".socials").removeClass("icons");
    });
    
});

