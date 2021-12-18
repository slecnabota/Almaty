
$(document).ready(function(){
    $(".menu").click(function(){
        $(".modal-canvas").toggleClass("hidden");
    });
    $(".modal-close").click(function(){
        $(".modal-canvas").toggleClass("hidden");
    });
    $(".modal-img").click(function(){
        $(".modal-canvas-image").toggleClass("hidden");
    });
    $(".modal-close-image").click(function(){
        $(".modal-canvas-image").toggleClass("hidden");
    });
});