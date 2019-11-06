
function createQuote() {
	addQuote(
		Quote(
			$(".cs-li:selected").attr('id'),
			basket,
			total
			)
		);
	basket = [];
	total = 0;
	$('#list').html('');
	$('#total').text(0);
}

function addToBasket(){
	var index = $(".st-li:selected").attr('id');
	var item= stockList[index];
	var basketItem = {

		id: index,
		name: item.getName(),
		pos: item.getPos(),
		pop: item.getPop(),
		quant: $('#product-quant').val()

	}

	basket.push(basketItem);
	var itemToPush = $('<div class="qli prod-item"></div>');
	var quant = $('#product-quant').val();

	//itemToPush.append('<span>Item: '+ item.getName()+'\t| Sale price: '+item.getPos()+'\t| Quantity: '+quant);
	itemToPush.append('<span>'+item.getName()
	    +'</span><span>'+item.getPos()
		+'</span><span>'+quant+'</span>');
	var button = $('<button class="remove"></button>');

	button.on('click', function(){
		basket.splice(basket.indexOf(basketItem),1);
		itemToPush.remove();
		total -= item.getPos() * quant;
		$('#total').text(total);
	})

	itemToPush.append(button)
	$('#list').append(itemToPush);
	total += item.getPos() * quant;
	$('#total').text(total);
/*
	basket.push(basketItem);
	var itemToPush = $('<div class="qli"></div>');
	var quant = $('#product-quant').val();
	itemToPush.append('<span>Item: '+ item.getName()+'\t| Sale price: '+item.getPos()+'\t| Quantity: '+quant);
	var button = $('<button>X</button>');
	button.on('click', function(){
		basket.splice(basket.indexOf(basketItem),1);
		itemToPush.remove();
		total -= item.getPos() * quant;
		$('#total').text(total);
	})
	itemToPush.append(button)
	$('#list').append(itemToPush);
	total += item.getPos() * quant;
	$('#total').text(total);*/

}