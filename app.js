const BorderTry = document.querySelectorAll(".BorderTry");

    BorderTry.forEach(BorderTry => {
        BorderTry.addEventListener("click", ()=>{
            BorderTry.classList.toggle("active");
        });
    });


    
    const BorderTry1 = document.querySelectorAll(".BorderTry1");

    BorderTry1.forEach(BorderTry1 => {
        BorderTry1.addEventListener("click", ()=>{
            BorderTry1.classList.toggle("active");
        });
    });


   
   
    const productContainers = [...document.querySelectorAll('.product-container')];
    const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
    const preBtn = [...document.querySelectorAll('.pre-btn')];
    
    productContainers.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;
    
        nxtBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        })
    
        preBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        })
    })