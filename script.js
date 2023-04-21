/*
    RMIT University Vietnam
    Course: COSC2430 Web Programming
    Semester: 2023A
    Assessment: Assignment 1
    Author: Your names (e.g. Nguyen Van Minh)
    ID: Your student ids (e.g. 1234567)
    Acknowledgement: Acknowledge the resources that you use here.
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