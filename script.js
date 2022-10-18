function snapCrackle(maxValue){
    let numero = 0;
    let retorno = "";
    
    for (let i = 1; i <= maxValue; i++){
        if  (i%2 != 0 && i%5 == 0){
            retorno += "SnapCrackle, ";
        }
        
        else if (i%5 == 0){
            retorno += "Crackle, ";
        }

        else if(i%2 !== 0){
            retorno += "Snap, ";
        }
        else if(i%2 == 0){
            retorno += numero + i + ", ";
        }
    }
    return retorno;
}
console.log(snapCrackle());