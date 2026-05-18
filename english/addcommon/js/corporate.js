//Grobal
var current_view = 'pc'; //Viewport State
var ww = $(window).width(); //Window Width
var wh = $(window).height(); //Window Height
var user_scroll = $(window).scrollTop(); //Scroll Position

/////////////////////////////////////////////
/* Init */
/////////////////////////////////////////////
$(document).ready(function(){
	ww = $(window).width();
	wh = $(window).height();
	
	$('#inner.corporate.organization .content .bgbox').outerHeight(wh);
	$('#inner.corporate.organization .content .concept').outerHeight(wh);
	$('#inner.corporate.organization .content .purpose').outerHeight(wh);
	$('#inner.corporate.organization .content .mission').outerHeight(wh);
	$('#inner.corporate.organization .content .value').outerHeight(wh);
	$('#inner.corporate.organization .content .value2').outerHeight(wh);
});

/////////////////////////////////////////////
/* Resizing */
/////////////////////////////////////////////
$(window).resize(function(){
	ww = $(window).width();
	wh = $(window).height();
	$('#inner.corporate.organization .content .bgbox').outerHeight(wh);
	$('#inner.corporate.organization .content .concept').outerHeight(wh);
	$('#inner.corporate.organization .content .purpose').outerHeight(wh);
	$('#inner.corporate.organization .content .mission').outerHeight(wh);
	$('#inner.corporate.organization .content .value').outerHeight(wh);
	$('#inner.corporate.organization .content .value2').outerHeight(wh);
	
});

/////////////////////////////////////////////
/* Scrolling */
/////////////////////////////////////////////
$(window).scroll(function (){
	
	checkAnimationIndex();
});
function checkAnimationIndex(user_scroll){
	ww = $(window).width();
	wh = $(window).height();
	user_scroll = $(window).scrollTop();	
	
	//背景を切り替え
	var concept_offset = 300;
	
	if(ww >= 768){
		concept_offset = 300;
	} else {
		concept_offset = wh;
	}
	if(user_scroll > $('#inner.corporate.organization .content .concept').offset().top + concept_offset) {
		$('#inner.corporate.organization .content .concept').addClass('hide');
		$('#inner.corporate.organization .content .bgbox').addClass('bg1');
	} else {
		$('#inner.corporate.organization .content .concept').removeClass('hide');
		$('#inner.corporate.organization .content .bgbox').removeClass('bg1');
	}	
	if(user_scroll > $('#inner.corporate.organization .content .concept').offset().top + concept_offset) {
		var zoom = (user_scroll - $('#inner.corporate.organization .content .concept').offset().top) / (wh*3);
		if(ww >= 768){
			zoom *= 1.2;
		} else {
			zoom *= 0.8;
		}
		$('#inner.corporate.organization .content .bgbox > .logo img').css('transform', 'translate(-50%, -50%) scale('+(3-zoom*3)+')').css('opacity', zoom*1.5);
		if(zoom > 0.666666) {
			$('#inner.corporate.organization .content .bgbox > .logo img').css('transform', 'translate(-50%, -50%) scale(1)').css('opacity', '1');
		}
	} else {
		$('#inner.corporate.organization .content .bgbox > .logo img').css('transform', 'translate(-50%, -50%) scale(3)').css('opacity', '0');
	}
	if(user_scroll > $('#inner.corporate.organization .content .purpose').offset().top + wh*0.5) {
		$('#inner.corporate.organization .content .bgbox').addClass('bg2');
	} else {
		$('#inner.corporate.organization .content .bgbox').removeClass('bg2');
	}
	if(user_scroll > $('#inner.corporate.organization .content .mission').offset().top + wh*0.5) {
		$('#inner.corporate.organization .content .bgbox').addClass('bg3');
	} else {
		$('#inner.corporate.organization .content .bgbox').removeClass('bg3');
	}
	if(user_scroll > $('#inner.corporate.organization .content .value').offset().top + wh*0.5) {
		$('#inner.corporate.organization .content .bgbox').addClass('bg4');
		$('#inner.corporate.organization .content .bgbox > .hbox').addClass('label');
	} else {
		$('#inner.corporate.organization .content .bgbox').removeClass('bg4');
		$('#inner.corporate.organization .content .bgbox > .hbox').removeClass('label');
	}
	
	//追従時のコンテンツの滞留	
	if(user_scroll > $('#inner.corporate.organization .content .concept').offset().top + ($('#inner.corporate.organization .content .purpose').outerHeight()*0.5) + ($('#inner.corporate.organization .content .purpose > .inner').outerHeight()*0.5)) {
		$('#inner.corporate.organization .content .purpose').addClass('fixed');
	} else {
		$('#inner.corporate.organization .content .purpose').removeClass('fixed');
	}
	if(user_scroll > $('#inner.corporate.organization .content .mission').offset().top - wh + (wh - $('#inner.corporate.organization .content .purpose > .inner').outerHeight())*0.5) {
		$('#inner.corporate.organization .content .purpose').addClass('fixedend');
	} else {
		$('#inner.corporate.organization .content .purpose').removeClass('fixedend');
	}
	
	if(user_scroll > $('#inner.corporate.organization .content .purpose').offset().top + ($('#inner.corporate.organization .content .mission').outerHeight()*0.5) + ($('#inner.corporate.organization .content .mission > .inner').outerHeight()*0.5)) {
		$('#inner.corporate.organization .content .mission').addClass('fixed');
	} else {
		$('#inner.corporate.organization .content .mission').removeClass('fixed');
	}
	if(user_scroll > $('#inner.corporate.organization .content .value').offset().top - wh + (wh - $('#inner.corporate.organization .content .mission > .inner').outerHeight())*0.5) {
		$('#inner.corporate.organization .content .mission').addClass('fixedend');
	} else {
		$('#inner.corporate.organization .content .mission').removeClass('fixedend');
	}
	
	if(user_scroll > $('#inner.corporate.organization .content .mission').offset().top + ($('#inner.corporate.organization .content .value').outerHeight()*0.5) + ($('#inner.corporate.organization .content .value > .inner').outerHeight()*0.5)) {
		$('#inner.corporate.organization .content .value').addClass('fixed');
		$('#inner.corporate.organization .content .bgbox > .hbox').addClass('fixed');
	} else {
		$('#inner.corporate.organization .content .value').removeClass('fixed');
		$('#inner.corporate.organization .content .bgbox > .hbox').removeClass('fixed');
	}
	if(user_scroll > $('#inner.corporate.organization .content .value2').offset().top - wh + (wh - $('#inner.corporate.organization .content .value > .inner').outerHeight())*0.5) {
		$('#inner.corporate.organization .content .value').addClass('fixedend');
	} else {
		$('#inner.corporate.organization .content .value').removeClass('fixedend');
	}
	
	if(user_scroll > $('#inner.corporate.organization .content .value').offset().top + ($('#inner.corporate.organization .content .value2').outerHeight()*0.5) + ($('#inner.corporate.organization .content .value2 > .inner').outerHeight()*0.5)) {
		$('#inner.corporate.organization .content .value2').addClass('fixed');
	} else {
		$('#inner.corporate.organization .content .value2').removeClass('fixed');
	}
	if(user_scroll > $('#inner.corporate.organization .content .chart').offset().top - wh + (wh - $('#inner.corporate.organization .content .value2 > .inner').outerHeight())*0.5) {
		$('#inner.corporate.organization .content .value2').addClass('fixedend');
		$('#inner.corporate.organization .content .bgbox > .hbox').addClass('fixedend');
	} else {
		$('#inner.corporate.organization .content .value2').removeClass('fixedend');
		$('#inner.corporate.organization .content .bgbox > .hbox').removeClass('fixedend');
	}
	
	if(ww >= 768){
		
	} else {
		
	}
}