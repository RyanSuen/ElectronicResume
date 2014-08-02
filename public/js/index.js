define(['jquery'], function(jquery) {
	function index() {
		this.init = function() {
			$(function() {
				$('.home-main').slideDown().hover(function() {
					$.that = $(this);
					$(this).css('box-shadow', '0 0 5px 0.5px rgb(166,226,46)');
					//setTimeout(function() {
						$.that.css('color','rgb(166,226,46)').css('font-size','24px');
					//}, 50);
				}, function() {
					$.that = $(this);
					$(this).css('box-shadow', '0 0 5px 0.5px white');
					$(this).css('color','white').css('font-size','22px');


					
				});

			});
		}
	}

	return {
		index_instance: new index()
	};
});