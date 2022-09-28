var SliderImage = [
    'images/1.png',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg'

]

var dot_side = document.querySelector('.slider-down');

var iconindex = 0;
for(var i = 0 ; i<SliderImage.length ; i++) {

    var icon = document.createElement('i');
    icon.setAttribute('id',`${iconindex}`)
    icon.setAttribute('class','fa-solid fa-circle-dot iconlar');

    dot_side.appendChild(icon);

    iconindex++;
    
}

var img = document.querySelector('.slider img')




// for(var i = 0 ; i< SliderImage.length ; i++) {

//     img.setAttribute('id', `sekil${i}`)
// }

var index = 0;
img.src = SliderImage[index];

var right = document.querySelector('.next')

right.addEventListener('click', function () {

    index++;
    
    if (index > SliderImage.length - 1) {
        index = 0;
    }
    
    
    img.setAttribute('id', `sekil${index}`)
    img.src = SliderImage[index];

})

var left = document.querySelector('.prev')

left.addEventListener('click', function () {

    index--;
    if (index < 0) {
        index = SliderImage.length - 1;
    }

    img.setAttribute('id', `sekil${index}`)

    img.src = SliderImage[index];

})

var icons = document.getElementsByClassName('iconlar');


for(var i = 0 ; i<icons.length;i++) {

    icons[i].onclick=function(){

        var id = this.id
        img.src = SliderImage[[id]];

    }
}


setInterval(() => {
    index++;
    if (index > SliderImage.length - 1) {
        index = 0;
    }


    img.src = SliderImage[index];
}, 3000);