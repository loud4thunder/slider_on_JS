let point = document.querySelectorAll('.navigation__item')
let imageSlider = document.querySelectorAll('.img__pict')
let leftBtn = document.getElementById('left')
let rightBtn = document.getElementById('right')
let nameOfImg = document.querySelectorAll('.name__item')
let discrText = document.querySelectorAll('.specifications__list')

point[0].classList.add('active')
imageSlider[0].classList.add('active')
nameOfImg[0].classList.add('name-active')
discrText[0].classList.add('text-active')

let counter = 0;

for(let i=0; i<nameOfImg.length; i++){
    nameOfImg[i].addEventListener('click',()=>{
        for(let k = 0; k<nameOfImg.length; k++){
            nameOfImg[k].classList.remove('name-active')
            point[k].classList.remove('active')
            discrText[k].classList.remove('text-active')
            imageSlider[k].classList.remove('active')
        }
        counter = i;
        nameOfImg[counter].classList.add('name-active');
        discrText[counter].classList.add('text-active')
        imageSlider[counter].classList.add('active');
        point[counter].classList.add('active');
    })
}

for(let i=0; i<point.length; i++){
    point[i].addEventListener('click',()=>{
        for(let k = 0; k<imageSlider.length; k++){
            nameOfImg[k].classList.remove('name-active')
            point[k].classList.remove('active')
            discrText[k].classList.remove('text-active')
            imageSlider[k].classList.remove('active')
        }
        counter = i;
        nameOfImg[counter].classList.add('name-active');
        discrText[counter].classList.add('text-active')
        imageSlider[counter].classList.add('active');
        point[counter].classList.add('active');
    })
}

leftBtn.addEventListener('click',()=>{
    for(let k = 0; k<imageSlider.length; k++){
        nameOfImg[k].classList.remove('name-active')
        point[k].classList.remove('active')
        discrText[k].classList.remove('text-active')
        imageSlider[k].classList.remove('active')
    }
    counter--
    if (counter <0){
        counter = imageSlider.length-1
    }
    nameOfImg[counter].classList.add('name-active');
    discrText[counter].classList.add('text-active')
    imageSlider[counter].classList.add('active');
    point[counter].classList.add('active');
})

rightBtn.addEventListener('click',()=>{
    for(let k = 0; k<imageSlider.length; k++){
        nameOfImg[k].classList.remove('name-active')
        point[k].classList.remove('active')
        discrText[k].classList.remove('text-active')
        imageSlider[k].classList.remove('active')
    }
    counter++
    if (counter >= imageSlider.length){
        counter = 0
    }
    nameOfImg[counter].classList.add('name-active');
    discrText[counter].classList.add('text-active')
    imageSlider[counter].classList.add('active');
    point[counter].classList.add('active');
})

