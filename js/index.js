function init(){
const elHead = document.querySelector('header');
const elLogo = document.querySelector('header ul li:nth-of-type(1)');
const elBurger = document.querySelectorAll('header ul li span');
const elBurBtn = document.querySelector('header ul li:nth-child(2)');
const elMenu = document.querySelector('.menu');
const elWinSize = document.querySelector('.window-size');
function windowResize(){
    const elWid = window.innerWidth;
    if(elWid>=767){
        elWinSize.classList.add("show");
    }
    if(elWid<767){
        elWinSize.classList.remove("show");
    }
}
windowResize();
window.addEventListener("resize",windowResize)

function scrollNav(){
    if(pageYOffset > elHead.offsetHeight){
        elHead.style = 'background:#fff;';
        elLogo.innerHTML = '<img src="img/logo2.png">';
        for(let i=0; i<elBurger.length; i++){
            elBurger[i].style = 'background:#000;';
        }
    }else{
        elHead.style = 'background:none;';
        elLogo.innerHTML = '<img src="img/logo1.png">';
        for(let i=0; i<elBurger.length; i++){
            elBurger[i].style = 'background:#fff;';
        }
    }
}

window.addEventListener('scroll',function(){
    scrollNav();
})
elBurBtn.addEventListener('click',function(){
    elMenu.classList.add('active');
})
xbtn.addEventListener('click',function(){
    elMenu.classList.remove('active');
})

function slider1(){
    let slider = document.querySelector(".blogintro");
    let innerSlider = document.querySelector(".introslide");
    let pressed = false;
    let startX;
    let x;

    slider.addEventListener("mousedown",function(e){
        pressed = true;
        startX = e.offsetX - innerSlider.offsetLeft;
        slider.style.cursor = "grabbing";
    })
    slider.addEventListener("mouseenter",function(){
        slider.style.cursor="grab";
    })
    slider.addEventListener("mouseup",function(){
        slider.style.cursor="grab";
    })
    window.addEventListener("mouseup",function(){
        pressed = false;
    })

    function checkBoundary(){
        let outer = slider.getBoundingClientRect();
        let inner = innerSlider.getBoundingClientRect();

        if(parseInt(innerSlider.style.left) > 0){
            innerSlider.style.left="0px";
        }else if(inner.right < outer.right){
            innerSlider.style.left=`-${inner.width - outer.width}px`;
        }
    }
    slider.addEventListener("mousemove",function(e){
        if(!pressed) return;
        e.preventDefault();
        x = e.offsetX;

        innerSlider.style.left = `${x - startX}px`;
        checkBoundary();
    })
}
function slider2(){
    let slider = document.querySelector(".slider");
    let innerSlider = document.querySelector(".slider-inner");
    let pressed = false;
    let startX;
    let x;

    slider.addEventListener("mousedown",function(e){
        pressed = true;
        startX = e.offsetX - innerSlider.offsetLeft;
        slider.style.cursor = "grabbing";
    })
    slider.addEventListener("mouseenter",function(){
        slider.style.cursor="grab";
    })
    slider.addEventListener("mouseup",function(){
        slider.style.cursor="grab";
    })
    window.addEventListener("mouseup",function(){
        pressed = false;
    })

    function checkBoundary(){
        let outer = slider.getBoundingClientRect();
        let inner = innerSlider.getBoundingClientRect();

        if(parseInt(innerSlider.style.left) > 0){
            innerSlider.style.left="0px";
        }else if(inner.right < outer.right){
            innerSlider.style.left=`-${inner.width - outer.width}px`;
        }
    }
    slider.addEventListener("mousemove",function(e){
        if(!pressed) return;
        e.preventDefault();
        x = e.offsetX;

        innerSlider.style.left = `${x - startX}px`;
        checkBoundary();
    })
}
slider1();
slider2();


}
window.onload = init;