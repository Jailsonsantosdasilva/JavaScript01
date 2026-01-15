function getWeather(){
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Cloudy")
        }, 100)
    })
}

function getWeatherIcon(weather){
    return new Promise((res, rej) => {
        setTimeout(() => {
                switch(weather){
                    case "Sunny":
                        res('☀️')
                        break
                    case "Cloudy":
                        res('☁️')
                        break
                    case "Rainy":
                        res('🌧️')
                        break
                        default:
                            rej("nada encontrado")
                }  
        }, 100);
    })
}

function onSuccess(data){
    console.log(`sucesso ${data}`)
}

function onError(error){
    console.log(`Error ${error}`)
}

getWeather()
.then(getWeatherIcon)
.then(onSuccess)
.catch(onerror)