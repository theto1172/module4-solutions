var string="Hello";
		string += " World";
		console.log(string + "!");
		var string="Hello";
		string = string+" Thet";
		console.log(string+"!");

		//*** Regular Math Operators:+,-,*,/ ***//
		console.log((5+5)/2);
		console.log(undefined/5);

		//*** Equality***//
		var x=5,y=5;
		if (x==y){
			console.log("x=5 is equal to y=5");
		}
		x="5";
		if (x==y){
			console.log("x='5' is equal to y=5");
		}
		//*** Strict equality***//
		if (x===y){
			console.log("x='5' is equal to y=5");
		}
		else{
			console.log("x='5' is not equal to y=5")
		}

		//**** Best practice for {} style
		//Curly brace on the same or next line...
		//Is it just a style?
		function a()
		{
			return
			{
				name: "Thethtunoo"
			};
		}
		function b(){
			return{
				name: "Thethtunoo"
			};
		}
		console.log(a());
		console.log(b());

		// For Loop
		var sum=0;
		for (var i=0;i<10;i++){
			sum=sum+i;
			console.log(i);
		}
		console.log("sum of 0 through 9 is:" + sum);

		//Default values
		function orderChickenWith(sideDish){
			sideDish = sideDish || "Anything!";
			console.log("Chicken With "+ sideDish);
		}
		orderChickenWith("noodles");
		function orderFoodWith(sideDish){
			sideDish = sideDish || "Whatever!";
			console.log("Order Food With " + sideDish);

		}
		orderFoodWith("Cheese");
		orderFoodWith();
		orderChickenWith();
