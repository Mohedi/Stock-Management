$('#add-stock').on('click', function(){
	$('#view-add-stock').toggle('slow');
	$('#view-add-customer').hide('slow');
	$('#view-add-quote').hide('slow');

});

$('#add-customer').on('click', function(){
	$('#view-add-stock').hide('slow');
	$('#view-add-customer').toggle('slow');
	$('#view-add-quote').hide('slow');

})

$('#add-quote').on('click', function(){
	$('#view-add-stock').hide('slow');
	$('#view-add-customer').hide('slow');
	$('#view-add-quote').toggle('slow');

})