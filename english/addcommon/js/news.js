/////////////////////////////////////////////
/* Init */
/////////////////////////////////////////////
$(document).ready(function(){
	
	// 最新のニュース年と最も古いニュース年を定義
	var rt_bn_latest_news = $('.rt_bn_latest_news span').html();
	var rt_bn_earliest_news = $('.rt_bn_earliest_news span').html();

	// 現在のページURLから西暦を取得する関数
	function getYearFromURL() {
		var url = window.location.href; // 現在のURLを取得
		var pattern = /\/news\/(\d{4})\//; // 正規表現で西暦を抽出
		var match = url.match(pattern);
		if (match && match[1]) {
			return match[1]; // 西暦を返す
		} else {
			return ''; // 西暦がない場合は空を返す
		}
	}

	// URLから西暦を取得
	var selectedYear = getYearFromURL();

	// 西暦をボタンに表示（西暦が取得できない場合はデフォルトで「不明」）
	if (selectedYear) {
		$('.bt_menu').text(selectedYear);
	}

	// 現在のページURLからカテゴリ名を取得する関数
	function getCategoryNameFromURL() {
		var url = window.location.href; // 現在のURLを取得
		var pattern = /\/news\/(\d{4})\/([^\/]+)\//; // "/news/西暦/カテゴリ名/"の形式を検出
		var match = url.match(pattern); // 正規表現でURLを解析

		if (match && match[2]) {
			return match[2]; // カテゴリ名を返す
		} else {
			return ''; // カテゴリ名がない場合は空を返す
		}
	}

	// カテゴリ名を取得
	var categoryName = getCategoryNameFromURL();


	// 年のリストをループで作成し、リストに追加
	var yearList = '';
	for (var year = rt_bn_latest_news; year >= rt_bn_earliest_news; year--) {
		// カテゴリ名がある場合はURLに追加
		var url = '/news/' + year + '/';
		if (categoryName) {
			url += categoryName + '/';
		}
		// リスト項目を生成
		yearList += '<li><a href="' + url + '">' + year + '</a></li>';
	}

	// 生成されたリストをul内に挿入
	$('.yearselect ul').html(yearList);
	
	
	$('.content .news .list .yearselect button').on('click', function(){
		$(this).toggleClass('open').next().slideToggle(150);
	});	
	
});