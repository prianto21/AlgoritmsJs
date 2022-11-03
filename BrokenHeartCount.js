
function BrokenHeartCount(num){
    let CountBroken=0;
    let CountHeart=0;
    let CountBrokenHeart=0
    for(i=1 ; i <= num; i++){
        if(i%2==0 && i % 3 == 0){
            CountBrokenHeart+=1;
            console.log("brokenheart "+i);
        }else if(i%2==0){
            CountBroken+=1;
            console.log("broken")
        }else if(i%3==0){
            CountHeart +=1;
            console.log("heart")
        }else{
            console.log(i);
        }
        
    }
    console.log("broken heart : " +CountBrokenHeart)
    console.log("broken  : " +CountBroken)
    console.log("heart : " +CountHeart)
 
}
// test with numer 20
BrokenHeartCount(20);
// test with number 180
BrokenHeartCount(180)