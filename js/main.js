function initPage (t) {
	$('div.app-nav', t).off('click').on('click', function () {
		$("#navpanel", t).panel("toggle");
	});
	$('img.app-logo').off('click').on('click', function () {
		$.mobile.changePage('index.php');
	});
	$('img.app-go-top').off('click').on('click', function () {
		$("html, body").animate({ scrollTop: 0 }, 750);
	});
}

function init () {
	$(window).on('pagebeforeshow', function (e) {
		initPage($(e.target));
	}).on('scroll', function (e) {
		if ($(this).scrollTop() > 90) $('img.app-go-top').fadeIn();
		else $('img.app-go-top').fadeOut();
	});
	initPage($('div[data-role=page]'));
}

$(init);