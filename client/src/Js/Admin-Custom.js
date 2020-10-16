import $ from 'jquery'
$(function() {
    //	var he =$(this).height();
    //	$(".login").css({height:he+"px"});
    //	var wd =$(this).width();
    //	if(wd<768){
    //		alert(wd)
    //	}
})

$(function() {
    $("#srl").click(function() {
        $("body").toggleClass("add_on off_can")
    });
    $('ul.nav li.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });
    $("a[data-toggle='collapse']").on("click", function() {
        $("a[data-toggle='collapse'] i").toggleClass("animm");
        $("a[data-toggle='collapse']").toggleClass("borl");
    })
});
