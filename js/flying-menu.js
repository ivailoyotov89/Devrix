jQuery(document).ready(function($){
	
	var theMainEl= $('.flyingmenu-sm');
	var flyingMenuParent = $(theMainEl).parent();
	
	$(window).scroll(function() {
		if ( $(this).scrollTop() >=  flyingMenuParent.offset().top ) {
			$(theMainEl).addClass("flying")
		}
		else{
			$(theMainEl).removeClass("flying")
		}
	})
	$('.navbar-toggle', theMainEl).click(function(){
		var flyingMenu = $(this).parent();
		var collapseID = $(this).attr('data-target');
		var isCollapse = $(this).hasClass("in");
		if(isCollapse){
			$(this).removeClass('in');
			$(collapseID).removeClass('in')
		}
		else{
			$(this).addClass('in');
			$(collapseID).addClass('in')
			
		}
		
	})
	
})