//Object creating
		var company = new Object();
		company.name = "Facebook";
		company.ceo = new Object(); 
		company.ceo.firstName = "Mark";
		company.ceo.favColor ="blue";
		console.log(company);
		console.log("company CEO name is: " + company.ceo.firstName);
		console.log(company["name"]);
		var stockPropName ="stock of company";
		company[stockPropName]=110;
		console.log("stock price is: " + company[stockPropName] );

		// Better way: object literal
		var Facebook={
			name: "Facebook",
			ceo:{
				firstName:"Mark",
				favColor:"Blue"
			},
			"stock of company":110
		};
		console.log(Facebook);

		// Functions are First-Class Data Types
		// Functions are objects
		function multiply(x,y){
			return x * y;
		}
		console.log(multiply(5,4));
		multiply.version = "1.0.0";
		console.log(multiply.toString());
		console.log(multiply.version);

		// Function factory
		function makeMultiplier(multiplier){
			var myFunc = function (x){
				return multiplier * x;
			};
			return myFunc;
		}
		var multiplyBy3 = makeMultiplier(3);
		console.log(multiplyBy3(10));
		var doubleAll = makeMultiplier(2);
		console.log(doubleAll(100));

		// Passing functions as arguments
		function doOperationOn(x,operation){
			return operation(x);
		}
		var result = doOperationOn(5,multiplyBy3);
		console.log(result);
		result = doOperationOn(100,doubleAll);
		console.log(result);

		// Copy by Reference vs by Value
		var a = 7;
		var b = a;
		console.log("a: "+ a);
		console.log("b: "+ b);

		b=5;
		console.log("After b update:");
		console.log("a: "+ a);
		console.log("b: "+ b);

		var a={x: 7};
		var b=a;
		console.log(a);
		console.log(b);
		b.x=5;
		console.log("After b update");
		console.log(a);
		console.log(b);

		// Pass by reference vs by value
		function changePrimitive(primValue){
			console.log("In changePrimitive....");
			console.log("before:");
			console.log(primValue);

			primValue=5;
			console.log("After:");
			console.log(primValue);
		}
		var value=7;
		changePrimitive(value); // primValue=value
		console.log("After changePrimitive, orig value:");
		console.log(value);

		function changeObject(objValue){
			console.log("in changeObject...");
			console.log("before:");
			console.log(objValue);

			objValue.x=5;
			console.log("After:");
			console.log(objValue);
		}
		value={x: 7};
		changeObject(value);
		console.log("After changeObject, orig value:");
		console.log(value);

		function test(){
			console.log(this);
			this.myName="Thethtunoo";
		}
		test();
		console.log(window.myName);

		//Function Constructors
		function Circle(radius){
			this.radius =radius;		
		}
		Circle.prototype.getAera =
		function(){
			return Math.PI * Math.pow(this.radius,2);
		}
		var myCircle = new Circle(10);
		console.log(myCircle);

		//Object literals and "this"
		var literalCircle ={
			radius:10,
			getAera: function(){
				var self = this;
				console.log(this);
				var incraseRadius = function(){
					self.radius=20;
				};
				incraseRadius();
				console.log(this.radius);
				return Math.PI * Math.pow(this.radius,2);
			}
		};
		console.log(literalCircle.getAera());
