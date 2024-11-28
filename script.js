const numbers = [-24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5];
// 1
numbers.forEach((vse) => {
     document.body.innerHTML += `<span>${vse} </span>`
})

// 2
const druhaMocnina = numbers.map(cislo => cislo * cislo) 
document.body.innerHTML += `<div> <h3>2. úkol</h3> ${druhaMocnina} </div>`

// 3
const zapornaCisla = numbers.filter(cislo => cislo < 0)
document.body.innerHTML += `<div> <h3>3. úkol</h3> ${zapornaCisla} </div>`

//4
const absolutniHodnota = numbers.map(cislo => Math.abs(cislo))
document.body.innerHTML += `<div> <h3>4. úkol</h3> ${absolutniHodnota} </div>`

//5
const sudaCisla = numbers.filter(cislo => cislo % 2 === 0)
document.body.innerHTML += `<div> <h3>5. úkol</h3> ${sudaCisla} </div>`

//6
const delitalnaTremi = numbers.filter(cislo => Math.abs(cislo) % 3 === 0)
document.body.innerHTML += `<div> <h3>6. úkol</h3> ${delitalnaTremi} </div>`

//7
const vzdalenostOdPeti = numbers.map(cislo => Math.abs(cislo - 5))
document.body.innerHTML += `<div> <h3>7. úkol</h3> ${vzdalenostOdPeti} </div>`

//8
const druhaMocninaOdPeti = numbers.map(cislo => {
    const vzdalenost = Math.abs(cislo -5);
    return vzdalenost * vzdalenost
})
document.body.innerHTML += `<div> <h3>8. úkol</h3> ${druhaMocninaOdPeti} </div>`

//9
const pocetZapornych = zapornaCisla.length
document.body.innerHTML += `<div><h3>9. úkol</h3> ${pocetZapornych} </div>`

//10
let soucet = 0
numbers.forEach(cislo => soucet += cislo)
document.body.innerHTML += `<div> <h3>10. úkol</h3> ${soucet}</div>`

//11
const pocetCisel = numbers.length
const prumer = soucet / pocetCisel
document.body.innerHTML += `<div><h3>11. úkol</h3> ${prumer}</div>`

//12
let soucetKladna = 0
numbers.forEach(cislo => cislo > 0 ? soucetKladna += cislo : null)
document.body.innerHTML += `<div><h3>12. úkol</h3> ${soucetKladna}</div>`