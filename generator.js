module.exports = {

generates : function(amount){
   
  var arr = new Array(amount);


  for(var i = 0; i<amount; i++){
     

    arr[i]=(Math.round(Math.random()*1000+1));
    

  }
  if(amount === 1000){
      return arr;
  }
  return this.generates(amount+1);
    
}

};

