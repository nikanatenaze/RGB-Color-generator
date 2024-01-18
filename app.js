let colddoc = document.querySelector("#rgb-col-a")
let showcol = document.getElementById('change-col')
let page = document.getElementById('page')
let copy = document.getElementById('copy')


let rgb;
let rgbAddon = "Your random RGB Color is: "

colddoc.innerText = rgbAddon + rgb

function genRGB() {
    for (let i = 0; i < 1; i++) {
        let r = Math.round(Math.random() * 255)
        let g = Math.round(Math.random() * 255)
        let b = Math.round(Math.random() * 255)
        return rgb = `rgb(${r}, ${g}, ${b})`;
    }
}

function rgbtext() {
    colddoc.innerText = rgbAddon + rgb
}

function changecol() {
    showcol.style.background = genRGB()
}

function asd() {
    return colrgb = genRGB()
}

let text = asd()
const copyContent = async () => {
    try {
        await navigator.clipboard.writeText(text)
        alert(`Your successful copyed another Random RGB color`)
    } catch (err) {
        console.error('filed copy: ', err)
    }
}
