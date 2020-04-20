//Declaring A function to check the divisibilty of a numbers by 2,3 5
function divisibilty_check(number){
//output Array
  let output= [];
    
//For loop for the iteration
  for(let i=1; i<=number; i++){
      
//conditionals
    if (i % 2 === 0) {
            if (i%2===0 && i % 3 === 0 && i % 5 === 0) {
                output.push("yu-gi-oh")
            } else if (i % 2=== 0 && i % 3===0) {
               output.push("yu-gi")
            } else if (i%3===0 && i % 5 === 0) {
               output.push("gi-oh")
            } //else {
              //output.push("i")
            //}
        } else if (i % 3 === 0) {
            output.push("gi")
        } else if (i % 5 === 0) {
            output.push("oh")
        } else {
            output.push(i)
        }
    }
      //console.log(output);
     return output;
}
//Calling function with 100 as argument and 80 as a random number of choice. 
divisibilty_check(100);
divisibilty_check(80);
