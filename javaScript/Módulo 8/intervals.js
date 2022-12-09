let timer;

// const comecar = () =>{
//     timer = setInterval(showTime, 1000);
// }

// const parar = () =>{
//     clearInterval(timer);
// }


// const showTime = () =>{
//     let d = new Date();
//     let h = d.getHours();
//     let m = d.getMinutes();
//     let s = d.getSeconds();

//     let txt = h+':'+m+':'+s;

//     document.querySelector('.demo').innerHTML = txt
// }

const comecar = () =>{
    timer = setTimeout(() => {
        document.querySelector('.demo').innerHTML = 'my little cookie';
    }, 2000);
}

const parar = () => {
    clearTimeout(timer);
}