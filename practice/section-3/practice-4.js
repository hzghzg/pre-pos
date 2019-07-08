'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var arr=new Array();
  var index=0;
  for(var i1=0;i1<collectionA.length;i1++){
    var obj={};
    var count1=1;
    var zimu;
    var shuzi;
    if(collectionA[i1].length>1){
      zimu=collectionA[i1].split(/[-\[\]:]/)[0];
      shuzi=parseInt(collectionA[i1].split(/[-\[\]:]/)[1]);
    }
    else
    zimu=collectionA[i1];
    if(zimu!='0'){
      for(var i2=i1+1;i2<collectionA.length;i2++){
        if(collectionA[i1]==collectionA[i2]){
          count1++;
          collectionA[i2]='0';
        }
        else if(collectionA[i2].length>1 && collectionA[i2].indexOf(zimu)>-1){
          var shuzi1=parseInt(collectionA[i2].split(/[-\[\]:]/)[1]);
          count1=count1+shuzi1;
          collectionA[i2]='0';
        }
      }
    if(count1!=1){
      obj.key=zimu;
      obj.count=count1;
      arr[index]=obj;
    }
    else{
      if(collectionA[i1].length>1){
        obj.key=zimu;
        obj.count=shuzi;
        arr[index]=obj;
      }
    }i1
    index++;
    }
  }

  var arr1=new Array();
  arr1=objectB.value;
  for(let i1=0;i1<arr.length;i1++){
    var k=arr[i1].key;
    var c=arr[i1].count;
    var m=Math.floor(c/3);
    for(let i2=0;i2<arr1.length;i2++){
	 if(k==arr1[i2]){
        arr[i1].count=c-m; 
        break;
      }
    }
  }
  return arr;
}
