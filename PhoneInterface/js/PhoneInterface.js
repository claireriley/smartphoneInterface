var call = false;
$(document).ready(function(){ 
        $('.numbers').on('click',function() {
            printInput($(this).html());
        });
        $("#backspace").click(function(){
            removeOutput();
        });
    $(".circle").click(function(){
        if(document.getElementById("userInput").innerHTML.length ==12||document.getElementById("userInput").innerHTML=="911"||document.getElementById("userInput").innerHTML=="211"||document.getElementById("userInput").innerHTML=="311"||document.getElementById("userInput").innerHTML=="411"||document.getElementById("userInput").innerHTML=="511"||document.getElementById("userInput").innerHTML=="711"||document.getElementById("userInput").innerHTML=="811"){
        document.getElementById("callButton").src = "img/phoneYes.png";
        }else{
            document.getElementById("callButton").src = "img/phoneNo.png";
        }
    });
    $("#callButton").click(function(){
        if(document.getElementById("callButton").getAttribute('src') == "img/phoneYes.png"){
            call = true;
            callF();
        }else if(document.getElementById("callButton").getAttribute('src') == "img/phoneStop.png"){
            call = false;
            callF();
        }       
    });
});
function printInput(input){
    if(document.getElementById("userInput").innerHTML.length==3){
        $("#userInput").append("-");
    }
    if(document.getElementById("userInput").innerHTML.length==7){
        $("#userInput").append("-");
    }               
    if(document.getElementById("userInput").innerHTML.length<=11){
        $("#userInput").append(input);
    }
}
function removeOutput(){
    if(call == false){//if not already calling
        if(document.getElementById("userInput").innerHTML
    .length > 0){//if there is something inputted
            if(document.getElementById("userInput").innerHTML
    .length == 5){//remove - too
            document.getElementById("userInput").innerHTML = document.getElementById("userInput").innerHTML.slice(0,-1);               document.getElementById("userInput").innerHTML = document.getElementById("userInput").innerHTML.slice(0,-1);
            }else if(document.getElementById("userInput").innerHTML
    .length == 9){//remove - too
                document.getElementById("userInput").innerHTML = document.getElementById("userInput").innerHTML.slice(0,-1); 
                document.getElementById("userInput").innerHTML = document.getElementById("userInput").innerHTML.slice(0,-1); 
            }else{//just remove
            document.getElementById("userInput").innerHTML = document.getElementById("userInput").innerHTML.slice(0,-1);  
            }
        }
    }
}
function callF(){
    if(call==true){
        document.getElementById("numStar").style.visibility = "hidden";
        document.getElementById("numPound").style.visibility = "hidden";
        document.getElementById("num0").style.visibility = "hidden";
        document.getElementById("num1").style.visibility = "hidden";
        document.getElementById("num2").style.visibility = "hidden";
        document.getElementById("num3").style.visibility = "hidden";
        document.getElementById("num4").style.visibility = "hidden";
        document.getElementById("num5").style.visibility = "hidden";
        document.getElementById("num6").style.visibility = "hidden";
        document.getElementById("num7").style.visibility = "hidden";
        document.getElementById("num8").style.visibility = "hidden";
        document.getElementById("num9").style.visibility = "hidden";
        document.getElementById("backspace").style.visibility = "hidden";
        document.getElementById("userInput").style.visibility = "hidden";
        document.getElementById("callButton").src = "img/phoneStop.png";
         $("#dialing").append("Dialing..."+document.getElementById("userInput").innerHTML);
        if(document.getElementById("userInput").innerHTML.length < 4){
            document.getElementById("dialing").style.fontSize = "35px";
        }
        document.getElementById("dialing").style.visibility = "visible";
    }else{
        document.getElementById("numStar").style.visibility = "visible";
        document.getElementById("numPound").style.visibility = "visible";
        document.getElementById("num0").style.visibility = "visible";
        document.getElementById("num1").style.visibility = "visible";
        document.getElementById("num2").style.visibility = "visible";
        document.getElementById("num3").style.visibility = "visible";
        document.getElementById("num4").style.visibility = "visible";
        document.getElementById("num5").style.visibility = "visible";
        document.getElementById("num6").style.visibility = "visible";
        document.getElementById("num7").style.visibility = "visible";
        document.getElementById("num8").style.visibility = "visible";
        document.getElementById("num9").style.visibility = "visible";
        document.getElementById("backspace").style.visibility = "visible";
        document.getElementById("userInput").style.visibility = "visible";
        console.log(document.getElementById("dialing").innerHTML);
        document.getElementById("dialing").innerHTML = "";
        document.getElementById("callButton").src = "img/phoneYes.png";
        document.getElementById("dialing").style.fontSize = "23px";
        document.getElementById("dialing").style.visibility = "hidden";
    }
}