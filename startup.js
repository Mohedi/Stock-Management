$('#add-stock').on('click', function(){
	$('.in').val('');
	$(".view").hide("slow");
	$('#view-add-stock').toggle('slow');
	

});

$('#add-customer').on('click', function(){
	$('.in').val('');
    $(".view").hide("slow");
	$('#view-add-customer').toggle('slow');
	

})

$('#add-quote').on('click', function(){
	$('.in').text('');
	customerList.forEach(function(cust, i){
		$('#customer-list').append('<option class="cs-li" id="'+i+'">'+cust.getName()+'</option>')
	});
	stockList.forEach(function(prod, i){
		$('#product-list').append('<option class="st-li" id="'+i+'">'+prod.getName()+'</option>')
	})
	$(".view").hide("slow");
	$('#view-add-quote').toggle('slow');

})

$('#v-stock').on('click',function(){
	$(".view").hide("slow");
	$("#view-stocks").toggle('slow')
})

$('#v-customers').on('click',function(){
	$(".view").hide("slow");
	$("#view-customers").toggle('slow')
})

$('#v-quotes').on('click',function(){
	$(".view").hide("slow");
	$("#view-quotes").toggle('slow')
})

$('#stock-form-btn').on('click',createStock)

$('#cust-form-btn').on('click',createCustomer)

$('#add-item-btn').on('click',addToBasket)

$('#quote-form-btn').on('click', createQuote)