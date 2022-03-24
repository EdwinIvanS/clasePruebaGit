function procesar(unArray,callback){
    let a=[];
    for (let i =0 ; i<= unArray.length; i++){
        a.push(callback(unArray[i]));
    }
        return a;
}
    
let urlCompletas = procesar (["www.google.com","www.yahoo.com","www.git.com"],agregarHttp)