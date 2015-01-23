module.exports = {

generates : function(amount, quantity){
    var quantity = quantity || [];
    if (amount === 1000){
    return quantity; 
      }
      
    quantity.push(Math.floor(Math.random()*1000+1));
    

    return this.generates(amount+1, quantity); 

  }
    
};