let name= 'Clement Nduonyi'
console.log('My name is ' +name);

//courses array

var courses= ['HTML', 'CSS', 'JS', 'PYTHON'];

//Finding and displaying even numbers between 1 and 200

for (let i=2; i<=200; i++){
	if(i%2===0){
		courses.push(i);
	}
}
console.log(courses);
