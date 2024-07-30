const ExcelJS = require('exceljs')
import {test, expect } from '@playwright/test'

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

//writeExcel('Apple',500,{rowChange: 0,colChange: 2 },'/Auto/Playwright/data/test1.xlsx')

test ('Download And Upload Validation', async ({page}) => {
    const textSearch = 'Mango'
    const validateValue = '150'
    await writeExcel(textSearch,validateValue,{rowChange: 0,colChange: 2 },'/Auto/Playwright/data/download.xlsx')
    await page.goto('https://rahulshettyacademy.com/upload-download-test/')
    await page.locator('#fileinput').click()
    await page.locator('#fileinput').setInputFiles('/Auto/Playwright/data/download.xlsx')
    const textLocation = page.getByText(textSearch)
    const desiredRow = page.getByRole('row').filter({has: textLocation})
    await expect (desiredRow.locator('#cell-4-undefined')).toContainText(validateValue)

})