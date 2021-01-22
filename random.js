function megaFriend(arra)
  {
      if(arra.length==0)
      {
        console.log("Array is empty!"); 
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
console.log(megaFriend([]));