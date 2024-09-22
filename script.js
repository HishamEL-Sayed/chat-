$('.chat_icon').click(function () { 
    $(".show").toggle(display='block')    
})
$(".send").click(function(){
    $(".chatText").text($(".chat").val())

})