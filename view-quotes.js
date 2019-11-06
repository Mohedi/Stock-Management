function getListOfQuotes(){
	$('.quotes-view').html('');
	$('.quotes-view').append(`<div class='prod-item head'>
					<span>Quote N°</span>
					<span>Date</span>
					<span>Customer</span>
					<span>Total</span>
					<span>Confirm</span>
					</div>`
					)
	quoteList.forEach(function(element, i){
		var bigDiv = $('<div style="display:flex; flex-direction: column"></div>');
		var smallDiv = $('<div class="prod-item quote-item" id="'+i+'">'
			+'<span>'+i
			+'</span> <span>'+element.getDate()
			+ '</span><span>'+customerList[element.getCustomerId()].getName()
			+ '</span><span>'+ element.getTotal()
			+ '</div>');
		var confirmBtn = $('<button>Confirm Sale</button>');
		confirmBtn.on('click', function(){
			element.confirm();
			getListOfQuotes();
		})
		smallDiv.append(confirmBtn); 
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

		var delBtn = $('<button>Delete</button>');
		delBtn.on('click', function(){
			quoteList.splice(i, 1);
			getListOfQuotes();
		})
		bigDiv.append(delBtn);

		$('.quotes-view').append(bigDiv)
	})
}