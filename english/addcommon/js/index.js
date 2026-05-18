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
	
	$('.visual').height(wh);
	
	var news_current = 1;
	var news_current_prev = 0;
	var news_num = $('.visual .recent-news ul.newslist li').length;
	$('.visual .recent-news ul.newslist li:nth-child(1)').addClass('show');
	setTimeout(function(){
		if(news_num > 1){
			setInterval(function(){
				news_current++;
				news_current_prev++;
				if(news_current > news_num) news_current = 1;
				if(news_current_prev > news_num) news_current_prev = 1;
				$('.visual .recent-news ul.newslist li').removeClass('show');
				$('.visual .recent-news ul.newslist li:nth-child('+news_current+')').addClass('show');
				$('.visual .recent-news ul.newslist li').removeClass('showend');
				$('.visual .recent-news ul.newslist li:nth-child('+news_current_prev+')').addClass('showend');
			}, 4000);
		}
	}, 1500);
	
	if(ww >= 768){
		
	} else {
		
	}
});

/////////////////////////////////////////////
/* Resizing */
/////////////////////////////////////////////
$(window).resize(function(){
	ww = $(window).width();
	wh = $(window).height();
	
	if(ww >= 768){
		$('.visual').height(wh);
	} else {
		$('.visual').height(wh);
				
	}
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
	
	if(user_scroll > $('.intro').offset().top) {
		$('header').addClass('show');
	} else {
		$('header').removeClass('show');
	}
	
	if(ww >= 768){
		$('.visual').css('top', user_scroll*0.3+'px');
		$('.visual .recent-news').css('bottom', user_scroll*0.3+'px');
		if(user_scroll > 0) {
			let delta = 200 / ($('.intro').offset().top + $('.intro').height());
			$('.intro .bg').css('top', (user_scroll * delta) - 200 + 'px');
		} else {
			$('.intro .bg').css('top', '0px');
		}		
	} else {
		
	}
}