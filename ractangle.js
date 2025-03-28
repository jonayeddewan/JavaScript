const ractangle = (l,w) => {
    if(l <= 0){
        throw new RangeError("Length can not be negative");
    }
    if(w <= 0){
        throw new RangeError("Width can not be negative");
    }
    
        const area = l*w;
        console.log("Area is",area);
}

ractangle(5,-3);