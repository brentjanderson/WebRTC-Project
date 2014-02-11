window.App = {};

App.pageTitle = 'IS 542';

App.promptTimer = function() {
	setTimeout(function(){
		$('.dialog').toggleClass('visible');
	}, 10 * 1000);
};

App.promptTimer();