(function($){

	$.fn.tab = function(option){
		  
		var defaults={			 
		};
		var tab = this;

		$.extend(defaults, option);

		$.extend(this, {
			init: function(){
				this.tabHead = $(this).find("ul").eq(0);
				this.tabBody = $(this).children().not("ul");

				//只显示第一个tab 内容
				this.tabBody.hide().eq(0).show();

				var _this = this;
				
				this.tabHead.find("li").each(function(index){		    			
		    		$(this).click(function(){
		    			
		    			var left = index * 25;
		    			$(".indicator").eq(0).animate({
		    				"left": left + "%"
		    			}, 450, "linear");
		    			
		    			setTimeout(function(){    				
			    			$(".indicator").eq(1).animate({
			    				"left": left + "%"
			    			}, 450, "linear");
		    			}, 100);

		    			_this.tabBody.hide();
		    			_this.tabBody.eq(index).show();
		    		});
		    	});

			}
		});

		this.init();
	}
})(jQuery)