function divisibilty_check(number){
  let output= [];
  for(let i=1; i<=number; i++){
    if (i % 2 === 0) {
            if (i%2===0 && i % 3 === 0 && i % 5 === 0) {
                output.push("yu-gi-oh")
            } else if ( i % 2=== 0 && i % 3===0) {
               output.push("yu-gi")
            } else if (i%3===0 && i % 5 === 0) {
               output.push("gi-oh")
            } else {
              output.push("i")
            }
        } else if (i % 3 === 0) {
            output.push("gi")
        } else if (i % 5 === 0) {
            output.push("oh")
        } else {
            output.push(i)
        }
    }
      console.log(output);
     return output;
}
divisibilty_check(500);