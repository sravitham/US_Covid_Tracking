const fs = require('fs')

// Reading a file

// let rawData = fs.readFileSync('test.json')
// let covidData = JSON.parse(rawData)

// console.log(covidData)

fs.readFile('../../Data/test.json', (err, data) => {
    if (err) throw err;
    let covidData = JSON.parse(data)
    console.log(covidData)

    // Using map to modify data
    let plotData = Object.keys(covidData).map(element => {
        return {id: `US-${element.state}`, value: element.positive, month: element.YearMonth.month, year: element.YearMonth.qyear }
        // return {id: element.state, value: element.death}
    })
    console.log(plotData)
})
