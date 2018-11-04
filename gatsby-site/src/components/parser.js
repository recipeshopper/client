var parser = require('ingredients-parser');

let getIngredients = () => {
	let ingrArr = [];
	let temp = document.getElementsByClassName("recipe-ingred_txt");
	for (let i=0; i< temp.length; i++) {
		if (temp[i].getAttribute("itemprop") === "recipeIngredient") {
			ingrArr.push(temp[i].textContent);
		}
	}
	return ingrArr;
}

//DUMMY DATA - REMOVE WHEN DEPLOYING
var dummyData = ["2 cups all-purpose flour", "1/2 teaspoon baking soda", "1/2 teaspoon salt", "4 3/4 cup unsalted butter, melted", "1 cup packed brown sugar", "1/2 cup white sugar", "1 tablespoon vanilla extract", "1 egg", "1 egg yolk", "2 cups semisweet chocolate chips"];

let stringToNum = (string) => {
	return temp = string.split(' ').reduce((accum, ele)=>{
		return accum + eval(ele);
	}, 0)
}

let ingredParser = (ingrArr) => {
	let ingrObj = [];
	ingrArr.forEach((ele)=>{
		let tempObj = parser.parse(ele);
		tempObj.amount = stringToNum(tempObj.amount);
		ingrObj.push(tempObj);
	})
	return ingrObj;
}

console.log(ingredParser(dummyData));

let scrapeIngredients = () => {
	let ingrArr = getIngredients();
	let result = ingredParser(ingrArr);
	return result;
}
