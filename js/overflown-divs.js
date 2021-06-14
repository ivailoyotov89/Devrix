jQuery(document).ready(function($){
	$('.overflown').each(function() {
	
		var overflownParent = $(this).parent();
		var sibling = $('.articles-boxed', $(overflownParent)).first();
		var sibling_boxes_padding = $('.article-wrapper', $(sibling)).first()
		
		var tP = $(sibling_boxes_padding).css("padding").split(" ");
		var pb = parseInt(tP[2])
		var hh=$(sibling).first().outerHeight()
		
		if($(window).width()>=992){
			$(this).height(hh-pb)
		}
	})
	$(window).resize(function() {
		$('.overflown').each(function() {
			var overflownParent = $(this).parent();
			var sibling = $('.articles-boxed', $(overflownParent)).first();
			var sibling_boxes_padding = $('.article-wrapper', $(sibling)).first()
			
			var tP = $(sibling_boxes_padding).css("padding").split(" ");
			var pb = parseInt(tP[2])
			var hh=$(sibling).first().outerHeight()
			
			if($(window).width()>=992){
				$(this).height(hh-pb)
			}		
		})
	})	
})