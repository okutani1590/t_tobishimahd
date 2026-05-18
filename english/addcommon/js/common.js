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
	user_scroll = $(window).scrollTop();
	
    var ua = window.navigator.userAgent.toLowerCase();
    if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i) || ua.indexOf("ipad") > -1 || (ua.indexOf("macintosh") > -1 && "ontouchend" in document)){
      // for tablet
      $('body').addClass('tablet');
    }
	
	$('.img.wipe').each(function(){
		$(this).find('img').width($(this).width());
	});
	
	//添付ファイルサイズをKBに返還
	$('.rt_cf_n_attachment_file_size').each(function(){
		var bytes = $(this).html().replace(/[（）]/g, '');
		var kb = Math.round(bytes / 1024);

		if (kb < 1) { kb = 1; }
		$(this).html('（'+kb + 'KB'+'）');
	});
	
	setTimeout(function(){
		$(window).resize();
		checkViewsizeAndOverflow();
		checkAnimation();
		$('body').addClass('show');
		$('.main').height($('.main .wrap').outerHeight());
	}, 100);
	setInterval(function(){
		$('.main').height($('.main .wrap').outerHeight());
	}, 10);
  
  
	$('.faqlist .box .q').on('click', function(){
		$(this).toggleClass('open').next().slideToggle(300);
	});
	
	
	//ハンバーガーメニューの処理
	$('header .bt_menu, header .gmenu .bg').on('click', function(){
		$('body').toggleClass('busy');
		$('header').toggleClass('open');
		if($('header').hasClass('open')) {
			$('header .bt_menu span').html('CLOSE');
		} else {			
			$('header .bt_menu span').html('MENU');
		}
	});	
	
	
	//モーダル展開時にbodyのスクロールを禁止
	$(document).on('opening', '.remodal', function () {
		$('body').addClass('busy');
	});
	$(document).on('closing', '.remodal', function () {
		$('body').removeClass('busy');
	});
	
	checkRegion();
	
	if(ww >= 768){
		
	} else {
		
	}
});

//Set the position of the anchor link considering the height of the header
$(document).ready(function(){
	var headH = $("header").outerHeight();
	var animeSpeed = 800;
	var urlHash = location.hash;
	if (urlHash) { 
		$("body,html").scrollTop(0);
			setTimeout(function () { 
				var target = $(urlHash);
				var position = target.offset().top - headH;
				$("body,html").stop().animate({
				scrollTop: position
			}, animeSpeed);
		}, 0);
	}
});

/////////////////////////////////////////////
/* Resizing */
/////////////////////////////////////////////
$(window).resize(function(){
	ww = $(window).width();
	wh = $(window).height();
	
	var past_view = current_view;
	checkViewsizeAndOverflow();
	checkAnimation();

	$('.main').height($('.main .wrap').outerHeight());
	$('.img .wipe').each(function(){
		$(this).find('img').width($(this).parents('.img').width());
	});
	if(ww >= 768){

		
	} else {
				
	}
});

/////////////////////////////////////////////
/* Scrolling */
/////////////////////////////////////////////
$(window).scroll(function (){
	checkAnimation();
});

var animated = 0;
function checkAnimation(user_scroll){
	user_scroll = $(window).scrollTop();	

	if(user_scroll > 80) {
		$('#inner header').addClass('show');
	} else {
		$('#inner header').removeClass('show');
	}
  
	var offset = 150;
	if(ww >= 768){
		if(!$('body').hasClass('tablet') && !$('body').hasClass('shareholder_affairs')) {
			if(user_scroll > $('.main').height() - wh && $('.main').height() > wh) {
				$('.main .wrap').addClass('fixed');
				$('.main .wrap').css('bottom', (user_scroll - ($('.main').height() - wh))*0.3+'px');
			} else {
				$('.main .wrap').removeClass('fixed');
				$('.main .wrap').css('bottom', 'auto');
			}			
		}
	} else {
		offset = 75;
		if($('header').hasClass('open')) {
			$('body').removeClass('busy');
			$('header').removeClass('open');
			$('header .bt_menu span').html('MENU');
		}	
	}
	$('.scrollactive').each(function(){scrollActive(this, offset)});
}

/////////////////////////////////////////////
/* Other Functions */
/////////////////////////////////////////////
$(function(){
   $('a[rel*=anchor]').click(function() {
      var speed = 600;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
		var offset = 88;
		if(ww >= 768){
		}
		else {
			offset = 72;
		}
      $('body,html').animate({scrollTop:(position-offset)}, speed, 'swing');
      return false;
   });
});
function scrollActive(seelctor, offset) {
	user_scroll = $(window).scrollTop();
	ww = $(window).width();
	let ddelay = 0;
	if($(seelctor).attr('data-delay') && ww >= 768) ddelay = $(seelctor).attr('data-delay');
	//console.log(ddelay);
	if($(seelctor).length) {
		if($(seelctor).hasClass('nooffset')) {
			offset = 0;
		}
		if(user_scroll > $(seelctor).offset().top - wh + offset) {
			setTimeout(function(){
				$(seelctor).addClass('active');
			}, ddelay);			
		}
	}
}
function checkViewsizeAndOverflow() {
	if(ww >= 768){
		$("body").addClass("pc_view").removeClass("sp_view");
		current_view = 'pc';
	} else {
		$("body").addClass("sp_view").removeClass("pc_view");
		current_view = 'sp';
	}	
	if(wh >= 500){
		$("body").removeClass("overflow_menu");
	} else {
		$("body").addClass("overflow_menu");
	}
}