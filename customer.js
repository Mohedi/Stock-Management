var customerList=[]

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