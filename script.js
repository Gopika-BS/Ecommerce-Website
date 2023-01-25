const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
// console.log("Icon",bar);
// console.log("Navbar",nav);

if(bar){
    bar.addEventListener('click',() => {
        // console.log("Icon", bar.classList );
        // console.log("Before",nav.classList);
        nav.classList.add('active');
        console.log("After",nav.classList);
    })
}

if(close){
    close.addEventListener('click',() => {
        // console.log("Icon", bar.classList );
        // console.log("Before",nav.classList);
        nav.classList.remove('active');
        console.log("After",nav.classList);
    })
}