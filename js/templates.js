$(function(){
	$.get('/templates/header.html', function(d) {
		$(d).appendTo('header');
	});

	$.get('/templates/footer.html', function(d) {
		$(d).appendTo('footer');
	});

	$.get('/templates/dialog.html', function(d) {
		$(d).appendTo('body');

		$('.dialog button[data-evt="extend"]').click(function() {
			$('.dialog').toggleClass('visible');
			App.promptTimer();
		});

		$('.dialog button[data-evt="end"]').click(function() {
			window.location.href = 'https://www.google.com';
		});
	});

    document.getElementsByTagName('title')[0].text = App.pageTitle + ' | WebRTC Project'
});