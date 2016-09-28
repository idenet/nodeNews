define(['require', 'main'], function(require) {
	require(['feedback', 'more', 'carousel', 'scrollbar', 'tab'],
		function(feedback, more, carousel, scrollbar, tab) {
			feedback.goBack();
			feedback.back();

			more.add();
			more.less();

			carousel.go();

			scrollbar.loop();


			tab.switch();
		});
});