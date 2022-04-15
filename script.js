//Arrays
		var array = new Array();
		array[0] = "Thethtunoo";
		array[1] = 2;
		array[2] = function (name){
			console.log("Hello " + name);
		};
		array[3] = {course:"HTML,CSS & JS"};
		console.log(array);
		console.log(array[0]);
		array[2]("Rena");
		array[2](array[0]);
		console.log(array[3].course);

		//Short hand array creation
		var names =["Thet","Tun","Oo"];
		console.log(names);
		var myGrilFriendName =["Rena","Kuwa","Hara"];
		for (var i = 0; i<myGrilFriendName.length;i++){
			console.log("I love you " + myGrilFriendName[i]);
		}

		myGrilFriendName[100] = "Japan";
		for (var i = 0; i<myGrilFriendName.length;i++){
			console.log("I love you " + myGrilFriendName[i]);
		}
		 names =["Thet","Tun","Oo"];
		var myObj ={
			name: "Thet",
			course:"HTML/CSS/JS",
			platform:"coursera"
		};
		for (var prop in myObj){
			console.log(prop + ": " + myObj[prop]);
		}

		for (var name in names){
			console.log("I love you " + names[name]);
		}
		//Closures
		function makeMultiplier (multiplier){
			return (
				function (x){
					return multiplier*x;
				}

				);
		}
		var doubleAll = makeMultiplier(2);
		console.log(doubleAll(10));
