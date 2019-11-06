function getListOfInvoices(){
	$('.invoices-view').html('');
	$('.invoices-view').append(`<div class='prod-item head'>
					<span>Invoice N°</span>
					<span>Date</span>
					<span>Customer</span>
					<span>Total</span>
					</div>`
					)
	invoiceList.forEach(function(element, i){
		var bigDiv = $('<div style="display:flex; flex-direction: column"></div>');
		var smallDiv = $('<div class="prod-item quote-item" id="'+i+'">'
			+'<span>'+i
			+'</span> <span>'+element.getDate()
			+ '</span><span>'+customerList[element.getCustomerId()].getName()
			+ '</span><span>'+ element.getTotal()
			+ '</div>');
		 
		bigDiv.append(smallDiv);

		var slideDiv = $('<div class="sliding"></div>');
		slideDiv.append(`<div class='prod-item quote-head'>
					<span>Product</span>
					<span>Price</span>
					<span>Quantity</span>
					</div>`
					);
		element.getProducts().forEach(function(element){
			slideDiv.append(`<div class='prod-item quote-list'>
					<span>${element.name}</span>
					<span>${element.pos}</span>
					<span>${element.quant}</span>
					</div>`
					);
		})

		slideDiv.css('display', 'none');
		bigDiv.append(slideDiv);
		smallDiv.on('click', function(){
			slideDiv.toggle('fast');
		})
		$('.invoices-view').append(bigDiv)
	})
}