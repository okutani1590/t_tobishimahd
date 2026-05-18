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
		
	new ModalVideo('.js-modal-video');
	
	setTimeout(function(){
		checkAnimationIndex();
	}, 100);
	setTimeout(function(){
		$('.visual .recent-news').addClass('active');
	}, 600);
	setTimeout(function(){
		$('.visual .recent-news').addClass('activeend');
		$('.visual .bt_movie').addClass('activeend');
	}, 1600);

	var news_current = 1;
	var news_current_prev = 0;
	var news_num = $('.visual .recent-news ul.newslist li').length;
	$('.visual .recent-news ul.newslist li:nth-child(1)').addClass('show');
	setTimeout(function(){
		if(news_num > 4) news_num = 3; //最新の3件に制限
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
	

	var slider_setting = {
		infinite: true,
		autoplay: true,
		arrows: true,
		dots: true,
		speed: 1000,
		autoplaySpeed: 6000,
		pauseOnHover: false,
		pauseOnFocus: false,
		fade: true,
		swipe: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		cssEase: 'ease'
	};
	var $slider = $('.visual .slider');

	// slick 初期化
	$slider.slick(slider_setting);

	// スライド切り替え時の処理
	$slider.on('beforeChange', function(event, slick, currentSlide) {
		$('.bt_movie1, .bt_movie2').addClass('hide');
		if (currentSlide === 0) {
			$('.bt_movie2').removeClass('hide');
		} else if (currentSlide === 1) {
			$('.bt_movie1').removeClass('hide');
		}
	});

	if(ww >= 768){
		
	} else {
		
	}
	setInterval(function(){
		checkAnimationIndex();
	}, 200);
});

/////////////////////////////////////////////
/* Resizing */
/////////////////////////////////////////////
$(window).resize(function(){
	ww = $(window).width();
	wh = $(window).height();
	setTimeout(function(){
		checkAnimationIndex();
	}, 100);
});

/////////////////////////////////////////////
/* Scrolling */
/////////////////////////////////////////////
$(window).scroll(function(){
	checkAnimationIndex();
});

function checkAnimationIndex(user_scroll){
	ww = $(window).width();
	wh = $(window).height();
	wdh = window.visualViewport?.height || window.innerHeight;
	user_scroll = $(window).scrollTop();	
	
	if(user_scroll > $('.intro').offset().top) {
		$('header').addClass('show');
	} else {
		$('header').removeClass('show');
	}
	
	if(wdh < $('.visual').height()){
		if($('.visual').height() - wdh > user_scroll){
			$('.visual .recent-news').addClass('fixed');
			$('.visual .bt_movie').addClass('fixed');
		} else {
			$('.visual .recent-news').removeClass('fixed');
			$('.visual .bt_movie').removeClass('fixed');
		}
	} else {
		$('.visual .recent-news').removeClass('fixed');
		$('.visual .bt_movie').removeClass('fixed');
	}
	
}