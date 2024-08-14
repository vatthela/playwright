//import ExcelJS from 'exceljs' cannot use from node
const ExcelJS = require('exceljs');

let outputRow
let outputCol 
async function writeExcel(searchText, replaceText, change, filePath) {
    const workBook = new ExcelJS.Workbook()
    await workBook.xlsx.readFile(filePath)
    const workSheet = workBook.getWorksheet('Sheet1')
    const output = await readExcel(workSheet, searchText)
    const cell = workSheet.getCell(output.outputRow, output.outputCol + change.colChange)
    cell.value = replaceText
    await workBook.xlsx.writeFile(filePath)
}

async function readExcel(workSheet, searchText){
    workSheet.eachRow((row,rowNumber) => {
        row.eachCell((cell, colNumber) => {
            if (cell.value == searchText) {
                outputRow = rowNumber
                outputCol = colNumber
                console.log(outputRow,outputCol)
            }
        })
    })
    return {outputRow, outputCol}
}

writeExcel('Apple',500,{rowChange: 0,colChange: 2 },'/Auto/Playwright/data/test1.xlsx')
 