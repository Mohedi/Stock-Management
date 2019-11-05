var  stockList =[
	Stock('Phone', 300, 500, 20),
	Stock('Laptop', 500, 700, 30),
	Stock('Table', 20, 50, 100),
	Stock('Chair', 15, 30, 200)
];

function Stock(name, pop, pos, quant){

	return {
		name: name,
		pop: pop,
		pos: pos,
		quant: quant,

		getPop:getPop,
		getPos: getPos,
		getName:getName,
		getQuant:getQuant,
		setQuant:setQuant,	
	}
}


	function getPop(){
		return this.pop;
	}

	function getPos(){
		return this.pos;
	}

	function getName(){
		return this.name;
	}

	function getQuant(){
		return this.quant;
	}

	function setQuant(number){
		return this.quant+=number;
	}


	function addStock(obj){
		stockList.push(obj);
	}


