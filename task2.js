//Title

let heading = "Task 2"

console.log(heading)

//Array of Objects            

let dataArray =[
  {principal: 2500, time: 1.8},
  {principal: 1000, time: 5},
  {principal: 3000, time: 1}, 
  {principal: 2000, time: 3}
]

//Interest Calculator function

var interestCalculator = dataArray.map(pp=>{
    
    let rate;
 //Conditioners   
    
    if(pp.principal >= 2500 && pp.time >1 && pp.time < 3){
        rate = 3;

    }else if(pp.principal >= 2500 && pp.time >= 3){
        rate = 4;

    }else if(pp.principal < 2500 || pp.time <= 1){
        rate = 2;

    }else{
        rate = 1;

    }

    //Declaring Interest Calculation formular. 
    
    let interest = (pp.principal*pp.time*rate/100);
    
    //Function Parameters
   
    let interestData = {principal: pp.principal, time: pp.time, rate, interest};
    return interestData;
    

});

//Calling function
console.log(interestCalculator);



