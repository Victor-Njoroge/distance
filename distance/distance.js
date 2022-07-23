function distance(){
    var num2=parseInt(document.getElementById("box1").value);
    var num3="Bus Does not go beyond this point"
    var num1=parseInt(document.getElementById("box").value);
    if (num1>=1&&num1<=10){
        document.getElementById("box3").value=num1*num2*100;
    }else if(num1>=11&&num1<=50){
        document.getElementById("box3").value=num1*num2*300;
    }else if(num1>=51&&num1<=100){
        document.getElementById("box3").value=num1*num2*500;
    }else if(num1>=101&&num1<=200){
        document.getElementById("box3").value=num1*num2*1000;
    }else if(num1>=201&&num1<=300){
        document.getElementById("box3").value=num1*num2*1200;
    }else if(num1>=301&&num1<=400){
        document.getElementById("box3").value=num1*num2*1500;
    }else{
        document.getElementById("box3").value=num3;
    }


}
distance();