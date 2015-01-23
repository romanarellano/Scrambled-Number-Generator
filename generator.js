module.exports = {

generates : function(amount){
var arr = new Array(amount);

  for(var i = 0; i<amount; i++){
    var num  = (Math.round(Math.random()*1000));
   while(arr.indexOf(num) != -1){
     num = (Math.round(Math.random()*1000));
    
   }
    
    arr[i] = num;
    
  }
  arr.sort(function(x, y){
    return x-y;
   
  });
  
  if(amount === 1000){
      return arr;
  }
  return this.generates(amount+1);
    
}

};
