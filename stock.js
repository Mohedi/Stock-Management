var  stockList =[];
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