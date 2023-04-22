/*
    RMIT University Vietnam
    Course: COSC2430 Web Programming
    Semester: 2023A
    Assessment: Assignment 1
    Author: Huynh Ngoc Giang My 
    ID: s3978986 
    Acknowledgement: Amazon.com, Gooreads.com
*/

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar-items');

if (bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active')
    })
}

if (close){
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}

function changePrice() {
    var bookType = document.getElementById("book-type").value;
    var bookPrice = document.getElementById("price");
    if (bookType === "hardback") {
      bookPrice.innerHTML = "$12.00";
    } else {
      bookPrice.innerHTML = "$5.00";
    }
  }
  

var bigImg = document.getElementById("main-img");
var smallImg = document.getElementsByClassName("smalImg")

smallImg[0].onclick = function(){
    bigImg.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
    bigImg.src = smallImg[1].src;
}
smallImg[2].onclick = function(){
    bigImg.src = smallImg[2].src;
}