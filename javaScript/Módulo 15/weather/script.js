let q = (select) => document.querySelector(select);

q('.busca').addEventListener('submit', async (e)=>{
    e.preventDefault();

    let input = q('#searchInput').value;

    if(input !== ''){
        clearInfo();
        showWarning('Carregando...')

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=d06cdb298fafc83c520d5ab677fc477e&units=metric&lang=pt_br`;
        //c366335080d1fdbedb80d4f1ee78639c
        
        let results = await fetch(url);
        let json = await results.json();

        if(json.cod === 200){
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg
            })
        }else{
            clearInfo();
            showWarning('Não encontramos esta informação.')
        }
    }else{
        clearInfo();
    }
});
function showInfo(json){
    showWarning('');
    
    q('.titulo').innerHTML = `${json.name}, ${json.country}`;
    q('.tempInfo').innerHTML = `${json.temp} <sup>ºC</sup>`;
    q('.ventoInfo').innerHTML = `${json.windSpeed} <span>km/h</span>`;
    
    q('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}.png`)
    
    q('.ventoPonto').style.transform = `rotate(${json.windAngle -90}deg)`
    
    q('.resultado').style.display = 'block';
}

function clearInfo(){
    showWarning('');
    q('.resultado').style.display = 'none';
}

function showWarning(msg){
    q('.aviso').innerHTML = msg;
}

