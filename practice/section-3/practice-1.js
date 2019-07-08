'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var arr=new Array();
  arr=objectB.value;
  for(var i1=0;i1<collectionA.length;i1++){
    var k=collectionA[i1].key;
    for(var i2=0;i2<arr.length;i2++){
      if(k==arr[i2]){
        collectionA[i1].count--; 
        break;
      }
    }
  }
  return collectionA;
}
