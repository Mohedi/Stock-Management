function getListOfStock(){
	$('.stock-view').html('');
	$('.stock-view').append(`<div class='prod-item head'>
					<span>Product name</span>
					<span>Price of Purchase</span>
					<span>Price of Sale</span>
					<span>Quantity</span>
					</div>`
					)
	stockList.forEach(function(element, i){
		var div = $('<div class="prod-item"></div>');
		div.append('<span>'+element.getName()
			+'</span> <span>'+element.getPos()
			+ '</span><span>'+element.getPop()
			+ '</span><span>'+ element.getQuant()
			);
		$('.stock-view').append(div)
	})
}