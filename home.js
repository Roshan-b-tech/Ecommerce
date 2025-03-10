// header section

const navopen=document.querySelector(".mobile-open-btn");
const navclose=document.querySelector(".mobile-close-btn");
const primarynavigation=document.getElementById("primary-navigation");

navopen.addEventListener('click',()=>{
    const visibility=primarynavigation.getAttribute('data-visible');

    if(visibility==='false'){
        primarynavigation.setAttribute('data-visible',true);
        navclose.setAttribute('data-visible',true);
    }
    else{
        primarynavigation.setAttribute('data-visible',false);
        navclose.setAttribute('data-visible',false);
    }
});

navclose.addEventListener('click',()=>{
    const visibility=primarynavigation.getAttribute('data-visible');

    if(visibility==='true'){
        primarynavigation.setAttribute('data-visible',false);
        navclose.setAttribute('data-visible',false);
    }
});

const shoppingBag=document.getElementById('cart-box');
const cartitem=document.getElementById('cart-icon');
const crossbtn=document.getElementById('cross-btn');

shoppingBag.addEventListener('click',()=>{
    const showcart =cartitem.getAttribute('data-visible');

    if(showcart==="false"){
        cartitem.setAttribute('data-visible',true);
    }else{
        cartitem.setAttribute('data-visible',false);
    }
    
})

crossbtn.addEventListener('click',()=>{
    const showcart =cartitem.getAttribute('data-visible');
    
    if(showcart==="true"){
        cartitem.setAttribute('data-visible',false);
    }
     
})