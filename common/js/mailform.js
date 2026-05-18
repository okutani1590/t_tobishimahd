function confirmMail() {
	if($('input[name=email]').val() == $('input[name=email_confirm]').val()){
		$('input[name=is_same_email]').val('same');
	}else{
		$('input[name=is_same_email]').val('');
	}
}