/***************************************************************
 * [前端js调用主文件]
 * 所有的前端js文件都在这里调用
 **************************************************************/

/**
 * [requireJS路径配置]
 * [requireJS依赖配置]
 */
require.config({
	paths: {
		jquery: 'lib/jquery-1.11.1.min',
		jMobile: 'lib/jQueryMobile/jquery.mobile-1.4.3.min',
		index: 'public/js/index'
	},
	shim: {
		jMobile: {
			deps: ['jquery']
		},
		index: {
			exports: 'ryan'
		}
	}
});

/**
 * [前端js代码中央控制台，所有的前端代码都在这里集中调用]
 */
require(['jquery', 'index'], function(jquery, index) {
	
	index.index_instance.init();    //主页

	    //page1
	
	    //page2


});




