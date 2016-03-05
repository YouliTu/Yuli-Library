function creatPerson(name,age,job) {
	var o = new Object();
	var aname = name;
	
	o.sayName = function () {
		alert(aname);
	}
	return o;
}

// var person1 = creatPerson("one",1,"doctor");
// var person2 = creatPerson("one",1,"doctor");

// function Person(name,age,job) {
// 	this.name = name;
// 	this.age = age;
// 	this.job;
// 	this.firends = ["ecca","wumi"];
// 	if (typeof this.sayName != "function") {
// 		Person.prototype.sayName = funtion(){
// 			alert(this.name);
// 		}
// 	}
	
// }
// Person.prototype = {
// 	constructor:Person,
// 	sayName : function(){
// 		alert(this.name);
// 	}
// }

// var person1 = new Person("nico",17,"stu");
// var person2 = new Person("maki",18,"piano");

// person1.friends.push("honoka");
// console.log(person1.friends);
// console.log(person2.friends);
// console.log(person1.friends === person2.friends);
// console.log(person1.sayName === person2.sayName);


// var person1 = new Person();
// var person2 = new Person();
// person1.name = "niconiconi";



// var keys = Object.keys(Person.prototype);
// console.log(keys);
// var ab = Object.getOwnPropertyNames(Person.prototype);
// console.log(ab)

// console.log(Person.hasOwnProperty("name"));
// console.log(person1.hasOwnProperty("name"));
// console.log(person2.hasOwnProperty("name"));
// console.log(Person.prototype.constructor);
// console.log(person1.proto);
// console.log(Object.getPrototypeOf(person1).name)
// function hasPrototypeProperty(object,name) {
// 	return !object.hasOwnProperty(name) && (name in object);
// 	// object.hasOwnProperty == true  ——实例 return flase;
// 	//  == false return true ——原型
// }


// var book = {
// 	_year:2004,
// };

// // Object.difineProperties(book,{
// // 	_year:{
// // 		value:2004
// // 		// configurable:false
// // 	}
// // })

// var descriptor = Object.getOwnPropertyDescriptor(book,"_year");
// console.log(descriptor.value)
// console.log(descriptor.configurable)
// console.log(book._year)


