/////////////////////////////////////////////
/* Init */
/////////////////////////////////////////////
$(document).ready(function(){
	
	$('form .submitbox .reset input').on('click', function(){
		$('form input[type=text]').val('');
		$('form textarea').val('');
		$('form select').prop('selectedIndex', 0);
		$('form input[type=checkbox]').prop('checked', false);
		/*
		$('form input[type=text]').each(function(){
			$(this).val('');
		});
		console.log('aa')
		*/
	});	
	
});