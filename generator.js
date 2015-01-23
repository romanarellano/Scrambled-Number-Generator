module.exports = {

generates : function(amount){
var arr = new Array(amount);

   for (var i = 0; i<amount;i++) {
     var num = Math.floor(Math.random()*amount);
    while(arr.indexOf(num) != -1){
      num = (Math.round(Math.random()*amount));

    } 

    arr[i] = num;

      }
    return arr;  
   }

};
