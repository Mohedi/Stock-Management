var customerList=[
	Customer('John Smith', 5112342, "Johnsmith@Wallmart.biz", "Wallmart"),
	Customer('Adam Johnson', 5112342, "adam@gmoil.biz", "indepndent"),
	Customer('Mehdi Farjallah', 5112342, "meh@mohedi.tn", "mohedi"),
	Customer('Mohamed Belkheir', 5112342, "moh@mohedi.tn", "mohedi"),
]

function Customer(name, phone, email, company){
	return {
		name:name,
		phone:phone,
		email:email,
		company:company,

		getName: getName,
		getPhone: getPhone,
		getEmail: getEmail,
		getCompany: getCompany,
	};
}


function getName(){
	return this.name;
}

function getPhone(){
	return this.phone;
}

function getEmail(){
	return this.email;
}

function getCompany(){
	return this.company;
}

function addCustomer(obj){
	customerList.push(obj);
}