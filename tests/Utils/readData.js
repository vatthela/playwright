const ExcelJS = require('exceljs');

let outputRow
let outputCol 
async function getExcel(params) {
    const workBook = new ExcelJS.Workbook()
    await workBook.xlsx.readFile('/Auto/Playwright/data/test1.xlsx')
    const workSheet = workBook.getWorksheet('Sheet1')
    workSheet.eachRow((row,rowNumber) => {
        row.eachCell((cell, colNumber) => {
            if (cell.value == 'Apple') {
                outputRow = rowNumber
                outputCol = colNumber
                console.log(outputRow,outputCol)
            }
        })
    })
    const cell = workSheet.getCell(outputRow,outputCol)
    cell.value = "Iphone"
    await workBook.xlsx.writeFile('/Auto/Playwright/data/test1.xlsx')
}

getExcel()
