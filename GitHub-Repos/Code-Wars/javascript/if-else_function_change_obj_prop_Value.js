var user = {
    name: "Tiffany",
    total: 50
  }
  
  // Your Code Here
  var user = {
    name: "Tiffany",
    total: 50
  }
  
  // Your Code Here
    var grandTotal;
    function makePurchase(priceOfItem){
      if(priceOfItem <= user.total){
        console.log(grandTotal = (user.total - priceOfItem));
          user.total = grandTotal;
      }else{
        if(priceOfItem > user.total){
          return("not enough funds")
        }
      }
    }
  makePurchase(20);
  user.total = grandTotal;
  console.log(grandTotal);
  console.log(user.total);