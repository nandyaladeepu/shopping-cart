$(document).ready(function(){

	//sidbar tabs, adding active class to sidebar tabs
	$('.sidebar').find('li').click(function(){
		$('.active').removeClass('active');
		$(this).addClass('active');
	})
	// hiding products section and  showing cart section
	$('#cart').click(function(){
		$('#productcontainer').css('display','none');
		$('#cartcontainer').css('display','block');
	})
	// hiding cart section and  showing products section
	$('#products').click(function(){
		$('#productcontainer').css('display','block');
		$('#cartcontainer').css('display','none');
	})
	// moving item to cart when add to cart button is clicked and add to cart button is hidden
	$('.tocart').each(function(){
		$(this).click(function(){
			$(this).css('display','none');
			$(this).parent().find('.deletefromcart').css('display','block');
			$(this).parent().appendTo('#cartcontainer');
			$('#message').show(500);
			setTimeout(function() {
				$('#message').hide(500);
			}, 2000);
		})
	})
	// moving item to products from cart when add to delete button is clicked and delete button is hidden
	$('.deletefromcart').each(function(){
		$(this).click(function(){
			$(this).css('display','none');
			$(this).parent().find('.tocart').css('display','block');
			$(this).parent().appendTo('#productcontainer');
			$('#errormessage').show(500)
			setTimeout(function() {
				$('#errormessage').hide(500);
			}, 2000);
		})
	})

})