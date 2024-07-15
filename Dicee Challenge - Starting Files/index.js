// alert("working");
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomimage = "./images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomimage);
//similarly for right dice man
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomimage1 = "./images/dice"+randomNumber2+".png";
var image2 = document.querySelectorAll("img")[1]
image2.setAttribute("src",randomimage1);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML = "player 2 wins";
}
else 
{
    document.querySelector("h1").innerHTML = "draw!";
}