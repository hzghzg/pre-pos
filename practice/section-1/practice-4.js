'use strict';

function collectSameElements(collectionA, objectB) {
  var len1=collectionA.length;
  var len2=objectB.value.length;
  var index=0;
  var arr=new Array();
  var arr1=new Array();
  for(var i=0;i<len1;i++){
    arr[i]=collectionA[i].key;
  }
  for(var i1=0;i1<len1;i1++){
    for(var i2=0;i2<len2;i2++){
      if(arr[i1]==objectB.value[i2]){
        arr1[index]=arr[i1];
        index++;
        break;
      }
    }
  }
  return arr1;
}
