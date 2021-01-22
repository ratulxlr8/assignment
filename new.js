function megaFriend(arra)
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
console.log(megaFriend(["abhhhhhh", "a", "abcd"]));