function getListOfCustomers(){
	$('.cust-view').html('');
	$('.cust-view').append(`<div class='prod-item head'>
					<span>Name</span>
					<span>Phone Number</span>
					<span>E-Mail</span>
					<span>Company</span>
					</div>`
					)
	customerList.forEach(function(element, i){
		var div = $('<div class="prod-item"></div>');
		div.append('<span>'+element.getName()
			+'</span> <span>'+element.getPhone()
			+ '</span><span>'+element.getEmail()
			+ '</span><span>'+ element.getCompany()
			);
		$('.cust-view').append(div)
	})
}