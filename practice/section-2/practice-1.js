'use strict';

function countSameElements(collection) {
  var arr=new Array();
  var index=0;
  for(var i1=0;i1<collection.length;i1++){
    var obj={};
    var count1=1;
    if(collection[i1]!='0'){
      for(var i2=i1+1;i2<collection.length;i2++){
        if(collection[i1]==collection[i2]){
          count1++;
          collection[i2]='0';
        }
      }
    obj.key=collection[i1];
    obj.count=count1;
    arr[index]=obj;
    index++;
    }
  }
  return arr;
}
