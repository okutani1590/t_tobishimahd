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
	
	//IR CMSのliから.secを生成
	if($('#inner.securities_report').length || $('#inner.financial_results').length || $('#inner.financial_summary').length) {
		$('.irlist .sec').each(function() {
			var $section = $(this);
			var itemGroups = {};
			var order = [];

			// 各<li>要素を走査し、`rt_cf_n_sub_title`の内容で分類し順序を保存
			$section.find('.rt_bn_ir_list').each(function() {
				var subTitle = $(this).find('.rt_cf_n_sub_title').text().trim();

				// subTitleのカテゴリが存在しない場合、新しく作成し順序に追加
				if (!itemGroups[subTitle]) {
					itemGroups[subTitle] = $('<ul></ul>');
					order.push(subTitle); // 順序を記録
				}

				// 現在の<li>を該当するカテゴリに追加
				itemGroups[subTitle].append($(this).clone());
			});

			// 元のセクションをクリア
			$section.empty();

			// 新しいセクションを一時的に格納するための要素
			var newSections = $();

			// 順序に従ってカテゴリごとに新しいセクションを作成
			$.each(order, function(index, subTitle) {
				// 新しいセクションを作成して追加
				var newSection = $('<section class="sec"></section>');
				var newH2 = $('<h2 class="textstyle reverse scrollactive"><span>' + subTitle + '</span></h2>');

				newSection.append(newH2);
				newSection.append(itemGroups[subTitle]);

				// 生成したセクションを一時的に保存
				newSections = newSections.add(newSection);
			});

			// すべての新しいセクションを元の位置に挿入
			$section.after(newSections);

			// 元のセクションを削除
			$section.remove();
		});
	}
	
	//FAQの開閉
	$('#inner.shareholder_affairs .faq .inner .insec h3 button').on('click', function(){
		$(this).toggleClass('open').parents('h3').next().slideToggle(300);
	});	
	
});

/////////////////////////////////////////////
/* Resizing */
/////////////////////////////////////////////
$(window).resize(function(){
	ww = $(window).width();
	wh = $(window).height();
	
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
	
	
	if(ww >= 768){
		$('#inner .main .wrap .bg').css('top', user_scroll*0.3+'px');
		if(user_scroll > 0) {
			let delta = 200 / ($('.intro').offset().top + $('.intro').height());
			$('.intro .bg').css('top', (user_scroll * delta) - 200 + 'px');
		} else {
			$('.intro .bg').css('top', '0px');
		}		
	} else {
		
	}
}