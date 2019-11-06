function getListOfStock(){
	$('.stock-view').html('');
	$('.stock-view').append(`<div class='prod-item head'>
					<span>Product name</span>
					<span>Price of Purchase</span>
					<span>Price of Sale</span>
					<span>Quantity</span>
					<span>Remove Item</span>
					</div>`
					)
	stockList.forEach(function(element, i){

		

		
		
		

		var setView = $(`<div>
			<select>
				<option class="set">PoS</option>
				<option class="set">PoP</option>
				<option class="set">Quantity</option>
			</select>
			<input type='number' id='set-btn'>
			</div>
			`);
		var viewBtn = $('<button>submit</button>');
		viewBtn.on('click', function(){

			var func = {
				PoS: 'setPos',
				PoP: 'setPop',
				Quantity: 'changeQuant'
			};

			var selectedOption = $('.set:selected').val();
			stockList[i][func[selectedOption]]($('#set-btn').val());
			getListOfStock();
		})
		setView.append(viewBtn);

		var div = $('<div class="prod-item" id="'+i+'"></div>');
		div.append('<span>'+element.getName()
			+'</span> <span>'+element.getPos()
			+ '</span><span>'+element.getPop()
			+ '</span><span>'+element.getQuant()
			+ '</span>'
			);

		var delBtn = $('<button>Delete</button>');
		delBtn.on('click', function(){
			stockList.splice(i, 1);
			getListOfStock();
		})
		div.append(delBtn);
		
		$('.stock-view').append(setView);
		$('.stock-view').append(div);
		
	})
}

