var paivaaEl = document.getElementById("paivaa")
var tuntiaEl = document.getElementById("tuntia")
var minuuttiaEl = document.getElementById("minuuttia")
var sekunttiaEl = document.getElementById("sekunttia")

function laskuriTimer() {
const laskuriDate = new Date(`03/20/2024`).getTime()

const sekuntti = 1000
const minuutti = sekuntti * 60
const tunti = minuutti * 60
const paiva = tunti * 24


const interval = setInterval(() => {
const now = new Date().getTime()
const distance = laskuriDate - now
//const distance = countDownDate - now //tämä//





    paivaaEl.innerText = formatNumber(Math.floor(distance / paiva)) //ja sitten tämä
    tuntiaEl.innerText = formatNumber(Math.floor((distance % paiva) / tunti))
    minuuttiaEl.innerText = formatNumber(Math.floor((distance % tunti) / minuutti))
    sekunttiaEl.innerText = formatNumber(Math.floor((distance % minuutti)  / sekuntti))

    if (distance < 0) {
        document.getElementById("headline").innerq = "On aika siementää!"
        document.getElementById("laskuri").style.display = "none"

        clearInterval(interval)
    }
}, 1000)
}

function formatNumber(number) {
    if (number < 10) {
        return "0" + number
    }
    
    return number
}

laskuriTimer()