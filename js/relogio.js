(function(){
    const horas = document.querySelector('#horas')
    const minutos = document.querySelector('#minutos')
    const segundos = document.querySelector('#segundos')
    const data = document.querySelector('h1')
    let getDate  = new Date()

    data.textContent = getDate.toLocaleString('pt-BR', {month: 'long', weekday: 'long', day: 'numeric', year:'numeric'})

   
    
    const tempo = setInterval(function() {
        let getHoras = new Date()

        let hr = getHoras.getHours()
        let min = getHoras.getMinutes()
        let seg = getHoras.getSeconds()

        hr < 10 ? hr = `0${hr}` : hr
        min < 10 ? min = `0${min}` : min
        seg < 10 ? seg = `0${seg}` : seg

        horas.textContent = hr
        minutos.textContent = min
        segundos.textContent = seg
    })
    
    
})()