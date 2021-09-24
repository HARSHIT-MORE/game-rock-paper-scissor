var random_number1=Math.floor(Math.random()*3)+1;


var image1="images/r"+random_number1+".png";



document.querySelectorAll("img")[0].setAttribute("src",image1)

var random_number2=Math.floor(Math.random()*3)+1;
var image2="images/r"+random_number2+".png";
document.querySelectorAll("img")[1].setAttribute("src",image2)

if(random_number1==1 && random_number2==2){
    document.querySelector("h2").innerHTML="Player 1 won";
}
else if(random_number1==2 && random_number2==1){
    document.querySelector("h2").innerHTML="Player 2 won";
}
else if(random_number1==1 && random_number2==3){
    document.querySelector("h2").innerHTML="Player 2 won";
}
else if(random_number1==3 && random_number2==1){
    document.querySelector("h2").innerHTML="Player 1 won";
}
else if(random_number1==2 && random_number2==3){
    document.querySelector("h2").innerHTML="Player 1 won";
}
else if(random_number1==3 && random_number2==2){
    document.querySelector("h2").innerHTML="Player 2 won";
}
else{
    document.querySelector("h2").innerHTML="Draw";

}



