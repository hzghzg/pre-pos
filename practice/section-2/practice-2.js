'use strict';

function countSameElements(collection) {
  var arr=new Array();
  var index=0;
  for(var i1=0;i1<collection.length;i1++){
    var obj={};
    var count1=1;
    var zimu;
    var shuzi;
    if(collection[i1].length>1){
      zimu=collection[i1].split(/[-\[\]:]/)[0];
      shuzi=parseInt(collection[i1].split(/[-\[\]:]/)[1]);
    }
    else
    zimu=collection[i1];
    if(zimu!='0'){
      for(var i2=i1+1;i2<collection.length;i2++){
        if(collection[i1]==collection[i2]){
          count1++;
          collection[i2]='0';
        }
        else if(collection[i2].length>1 && collection[i2].indexOf(zimu)>-1){
          var shuzi1=parseInt(collection[i2].split(/[-\[\]:]/)[1]);
          count1=count1+shuzi1;
          collection[i2]='0';
        }
      }
    if(count1!=1){
      obj.key=zimu;
      obj.count=count1;
      arr[index]=obj;
    }
    else{
      if(collection[i1].length>1){
        obj.key=zimu;
        obj.count=shuzi;
        arr[index]=obj;
      }
    }
    index++;
    }
  }
  return arr;
}
