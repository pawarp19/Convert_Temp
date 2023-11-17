let celciusinput=document.querySelector('#celcius > input');

let fahrenheitinput=document.querySelector('#fahrenheit > input');

let kelvininput=document.querySelector('#kelvin > input');

let btn=document.querySelector('.btn button')


function roundno(num){
    return  Math.round(num*100)/100;
}

celciusinput.addEventListener('input', function(){
    let ctemp=parseFloat(celciusinput.value);
    let ftemp=(ctemp*(9/5))+32;
    let ktemp=ctemp+273.15;
    fahrenheitinput.value=roundno(ftemp);
    kelvininput.value=roundno(ktemp);
})

fahrenheitinput.addEventListener('input', function(){
    let ftemp=parseFloat(fahrenheitinput.value);
    let ctemp=(ftemp-32)*(5/9);
    let ktemp=(ftemp-32)*(5/9)+273.15;
    celciusinput.value=roundno(ctemp);
    kelvininput.value=roundno(ktemp);

})

kelvininput.addEventListener('input', function(){
    let ktemp=parseFloat(kelvininput.value);
    let ctemp=(ktemp*(9/5))+32;
    let ftemp=ktemp+273.15;
    fahrenheitinput.value=roundno(ftemp);
    celciusinput.value=roundno(ctemp);
})

btn.addEventListener('click',()=>{
    celciusinput.value=""
    fahrenheitinput.value=""
    kelvininput.value=""
})
