var button=document.getElementById("btn")
var paragraph=document.getElementById("para")
button.addEventListener("click", click);
function click() {
paragraph.innerHTML = "Hello!" + "<br>" + "This is Neeraj Singh Bisht";
}
paragraph.addEventListener("mouseover",mouseover);
function mouseover(){
    paragraph.style.color='cyan';
}
paragraph.addEventListener("mouseout",mouseout);
function mouseout(){
    paragraph.style.color='black';
}