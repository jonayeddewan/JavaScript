function smallestNumber(a,b,c){
    if(a<b){
        if(a<c){
            console.log("A is the Smallest Number");
        }
        else{
            console.log("C is the Smallest Number.");
        }
    }
    else{
        if(b<c){
            console.log("B is the Smallest Number.");
        }
        else{
            console.log("C is the Smallest Number.");
        }
    }
}

smallestNumber(6,2,-5);