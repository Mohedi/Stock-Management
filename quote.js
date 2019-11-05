var quoteList = [];
var invoiceList = [];
var basket = [];
var total = 0;

function Quote(customerId, products, total){
	return {
		customerId: customerId,
		products: products,
		total: total,
		date: new Date(),

		confirm: confirm,
		getCustomerId: getCustomerId,
		getProducts: getProducts,
		getTotal: getTotal,
		getDate: getDate
	};
}


function confirm(){
	for(var product of this.products){
		if(stockList[product.id].getQuant() < product.quant)
			return -1;
	}
	for(var product of this.products){
		stockList[product.id].setQuant(-1*product.quant)
	}
	invoiceList.push(this);
	quoteList.splice(quoteList.indexOf(this),1)
}

function getCustomerId(){
	return this.customerId;
}

function getProducts(){
	return this.products;
}

function getTotal(){
	return this.total;
}

function getDate(){
	return this.date.toDateString();
}

function addQuote(obj){
	quoteList.push(obj);
}

