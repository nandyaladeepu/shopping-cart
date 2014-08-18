$(document).ready(function(){
	$('.sidebar').find('li').click(function(){
		$('.active').removeClass('active');
		$(this).addClass('active');
	})
	$('#cart').click(function(){
		$('#productcontainer').css('display','none');
		$('#cartcontainer').css('display','block');
	})
	$('#products').click(function(){
		$('#productcontainer').css('display','block');
		$('#cartcontainer').css('display','none');
	})
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