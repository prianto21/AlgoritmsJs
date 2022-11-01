function tes(){
    var satu=0
    var dua=0
    var tiga=0
    var empat=0
    var lima=0;
    for(satu=0; satu<=10; satu++ ){
        if(satu %4 ==0){
            dua=(dua+satu+tiga)-lima;
            // console.log("angka ke 2   " +dua);
            console.log("angka ke 1 " +satu);
        }
        else if(satu%3==0){
            tiga=tiga+(satu+dua)-empat;
            console.log("angka ke 3  " +tiga);
        }
        else if(satu%2==0){
            empat=empat+(satu+dua)-tiga;
            // console.log("angka ke 4  " +empat);
        }
        else if(satu%1==0){
            lima=satu+dua+tiga;
            // console.log("angka ke 5  " +lima);
        }else{
            // console.log(dua);
        }

        
        
    }
}

console.log(tes());