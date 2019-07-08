'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var arr=new Array();
  var index=0;
  for(var i1=0;i1<collectionA.length;i1++){
    var obj={};
    var count1=1;
    if(collectionA[i1]!='0'){
      for(var i2=i1+1;i2<collectionA.length;i2++){
        if(collectionA[i1]==collectionA[i2]){
          count1++;
          collectionA[i2]='0';
        }
      }
    obj.key=collectionA[i1];
    obj.count=count1;
    arr[index]=obj;
    index++;
    }
  }

  var arr1=new Array();
  arr1=objectB.value;
  for(var i1=0;i1<arr.length;i1++){
    var k=arr[i1].key;
    var c=arr[i1].count;
    var m=Math.floor(c/3);
    for(var i2=0;i2<arr1.length;i2++){
      if(k==arr1[i2]){
        arr[i1].count=c-m; 
        break;
      }
    }
  }
  return arr;
}
