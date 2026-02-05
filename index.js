"use strict"

const carrousel = document.querySelector(`.PersonalInfo-carrousel`)
const carrete = carrousel.querySelector(`.Carrousel-carrete`)
const apartado = carrousel.querySelectorAll(`.Carrousel-apartado`)
const next  = carrousel.querySelector(`.Carrousel-next`)
const prev  = carrousel.querySelector(`.Carrousel-prev`)
let indiceActual = 0
const ancho = 100 / apartado.length

next.addEventListener(`click`, () =>{
    indiceActual++

    if (indiceActual >= apartado.length){
        indiceActual = 0
    }
    carrete.style.transform = `translateX(-${indiceActual * ancho}%)`
})

prev.addEventListener(`click`, () =>{
    indiceActual--

    if (indiceActual < 0){
        indiceActual = apartado.length - 1
    }
    carrete.style.transform = `translateX(-${indiceActual * ancho}%)`
})