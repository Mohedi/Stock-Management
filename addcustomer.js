
function createCustomer(){
	addCustomer(
		Customer(
			$('#cust-name').val(),
			$('#cust-no').val(),
			$('#cust-mail').val(),
			$('#cust-comp').val()
			)
		);
		$('.in').val('');
}

/*

cust-name
cust-no
cust-mail
cust-comp

*/