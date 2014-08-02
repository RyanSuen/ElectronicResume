define(['jquery'], function(jquery) {
	function index() {
		this.init = function() {
			$(function() {
				$('.home-main').slideDown(2000).hover(function() {
					$.that = $(this);
					$(this).css('box-shadow', '0 0 5px 0.5px #fff06e');
					$.that.css('color','#fff06e').css('font-size','24px');
				}, function() {
					$.that = $(this);
					$(this).css('box-shadow', '0 0 5px 0.5px white');
					$(this).css('color','white').css('font-size','22px');
				});
				$('.home-main').on('click', function() {
					alert("ryansuen");
				});

			});
		};
	}

	return {
		index_instance: new index()
	};
});