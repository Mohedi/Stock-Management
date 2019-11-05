$('#add-stock').on('click', function(){
	$('.in').val('');
	$('#view-add-stock').toggle('slow');
	$('#view-add-customer').hide('slow');
	$('#view-add-quote').hide('slow');

});

$('#add-customer').on('click', function(){
	$('.in').val('');
	$('#view-add-stock').hide('slow');
	$('#view-add-customer').toggle('slow');
	$('#view-add-quote').hide('slow');

})

$('#add-quote').on('click', function(){
	$('.in').text('');
	customerList.forEach(function(cust, i){
		$('#customer-list').append('<option class="cs-li" id="'+i+'">'+cust.getName()+'</option>')
	});
	stockList.forEach(function(prod, i){
		$('#product-list').append('<option class="st-li" id="'+i+'">'+prod.getName()+'</option>')
	})
	$('#view-add-stock').hide('slow');
	$('#view-add-customer').hide('slow');
	$('#view-add-quote').toggle('slow');

})

$('#stock-form-btn').on('click',createStock)

$('#cust-form-btn').on('click',createCustomer)

$('#add-item-btn').on('click',addToBasket)

