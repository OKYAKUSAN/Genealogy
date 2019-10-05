var test=[6087,5173,1358,3825,2531];
var bingo=0;
var chaiNum=function(num){
    let result=[];
    result[0]=num/1000;
    result[1]=num%1000/100;
    result[2]=num%100/10;
    result[3]=num%10;
    return result;
}
var checkRepeat=function(num){
    let numArray=chaiNum(num);
    let hash={};
    let repeat=false;
    numArray.forEach(function(item){
        if(hash[item]==="undefined") hash[item]=false;
        else {
            hash[item]=true;
            repeat=true;
        }
    });
    return repeat;
}
for(var i=1000;i<10000;i++){
    if(checkRepeat(i)) continue;
    console.log(1);
    let testArray=[];
    let bingoArray=chaiNum[i];
    let count=[];
    test.forEach(function(item){
        let tempCount=0;
        testArray=chaiNum(item);
        for(var j=0;j<testArray;j++){
            if(testArray[j]===bingoArray[j]) tempCount++;
        }
        count.push(tempCount);
    });
    if(count[0]==2&&count[1]==2&&count[2]==2&&count[3]==2){
        bingo=i;
        break;
    }
}
console.log(bingo);