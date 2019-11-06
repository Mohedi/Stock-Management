
function createStock(){
	addStock(
		Stock(
				$('#prod-name').val(),
				$('#prod-pop').val(),
				$('#prod-pos').val(),
				$('#prod-quant').val(),
			)
		)
		$('.in').val('');
}