define(['jquery'], function(jquery) {
	function index() {
		this.test = function() {
			$(function() {
				alert('jquery index test');
			});
			
		}
	}

	return {
		index_instance: new index()
	};
});