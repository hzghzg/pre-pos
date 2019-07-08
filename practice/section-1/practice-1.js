'use strict';

function collectSameElements(collectionA, collectionB) {
  var arr=new Array();
  var index=0;
  var len1=collectionA.length;
  var len2=collectionB.length;
  for(var i1=0;i1<len1;i1++){
    for(var i2=0;i2<len2;i2++){
      if(collectionA[i1]==collectionB[i2]){
        arr[index]=collectionA[i1];
        index++;
        break;
      }
    }
  }
  return arr;
}
