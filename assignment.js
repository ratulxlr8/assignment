function kilometerToMeter(x)
{
    if(x>=0)
    {
        return ((x*100));
    }

    else {
        return console.log("Invalid input");
    }
    
}


function budgetCalculator(watch,phone,laptop)
{     
    if(watch>=0 && phone>=0 && laptop>=0)
    {
        return (watch*50,phone*100,laptop*500);
    }
    else {
        return console.log("Invalid input");
    }
  
}


function hotelCost(daysToStay){
    if(daysToStay<=10 && daysToStay>0){
        return(daysToStay*100);
    }

        else if(daysToStay>10 && daysToStay<=20)
        {
        return(daysToStay*100-(10-(20-daysToStay))*20);
            
        }
            else if(daysToStay>20)
            {
                return((daysToStay*100-200)-((daysToStay-20)*50));
            }

            else if(daysToStay<0)
            {
                return console.log("Invalid input");
            }
                
}


function megaFriend(arra)
  {
      if(arra.length==0)
      {
        console.log("No elements in the array"); 
      }
      else
      {
    var maxNmae = arra[0].length;
    var maxIndex = arra[0];
    for (var i = 1; i < arra.length; i++) {
        var maxNmaeCheck = arra[i].length;
        if (maxNmaeCheck > maxNmae) {
            maxIndex = arra[i];
            maxNmae = maxNmaeCheck;
        }
    }
    return maxIndex;
      }
}
