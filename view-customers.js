function getListOfCustomers(){
	$('.cust-view').html('');
	$('.cust-view').append(`<div class='prod-item head'>
					<span>Name</span>
					<span>Phone Number</span>
					<span>E-Mail</span>
					<span>Company</span>
					<span>Delete</span>
					</div>`
					)
	customerList.forEach(function(element, i){
		var div = $('<div class="prod-item" id="'+i+'"></div>');
		div.append('<span>'+element.getName()
			+'</span> <span>'+element.getPhone()
			+ '</span><span>'+element.getEmail()
			+ '</span><span>'+ element.getCompany()
			+'</span>'
			);
		var delBtn = $('<button>Delete</button>');
		delBtn.on('click', function(){
			customerList.splice(i, 1);
			getListOfCustomers();
		})
		div.append(delBtn);
		$('.cust-view').append(div)
	})
}