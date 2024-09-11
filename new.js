function calculateTax(income, expenses) {
    let tax;
    if(!(income>=0)){

        
        
        return "Invalid Input"

    } 
    else if(!(expenses>=0)){
        
        return "Invalid Input"
    }else if(income >= expenses){
        let total = income - expenses
        tax = total*0.2
        
    } else{
        
        return "Invalid Input"
    }

    return tax

    
}



function sendNotification(email) {
   
    let del = email.split("@").join(" sent you an email from ")
    
    

   for(let em of email){
    if(em !== "@"){
        
        
    } else{
        return del
    }
   }
   
   return "Invalid Email"
}

function checkDigitsInName(name) {
    if(typeof name === "string"){

    
    for (let i = 0; i < name.length; i++) {
        const char = name[i];
        if (!isNaN(char) && char !== ' ') {
            return true; 
        }
    }

    return false; 
} else{
    return "Invalid Input"
}
}







function calculateFinalScore(obj) {
    if(typeof obj === "object"){

    
    let family;
    let score;
    
    if(obj.isFFamily == true){
        family = 20;
    } else {
        family=0
    }
    score = family+obj.testScore+obj.schoolGrade
    if(score>=80){
        return true
    } else{
        return false
    }

}
else{
    return "Invalid Input"
}
    
       
}



function  waitingTime(waitingTimes  , serialNumber) {
    if(Array.isArray(waitingTimes)){
   
        if(typeof serialNumber === "number"){

        
    
    let sum = 0;

    let cal;
    let time;
    for(let wait of waitingTimes){
        
        sum = sum +wait
    }
    cal = sum/waitingTimes.length
   let rounded = Math.round(cal)
   time = rounded*((serialNumber-1)-waitingTimes.length)
   return time
} else{
     return "Invalid Input"
}

}
 else{
    return "Invalid Input"
}
  
   

}







