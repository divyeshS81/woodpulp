// ---------------------------------------------------------
// Bootstrap 4 : Responsive Dropdown Multi Submenu
// ---------------------------------------------------------
$(function(){
	$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
	  if (!$(this).next().hasClass('show')) {
		$(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
	  }
	  var $subMenu = $(this).next(".dropdown-menu");
	  $subMenu.toggleClass('show'); 			// appliqué au ul
	  $(this).parent().toggleClass('show'); 	// appliqué au li parent
  
	  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
		$('.dropdown-submenu .show').removeClass('show'); 	// appliqué au ul
		$('.dropdown-submenu.show').removeClass('show'); 		// appliqué au li parent
	  });
	  return false;
	});
  });