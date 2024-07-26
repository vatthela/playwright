const ExcelJS = require('exceljs');

const workbook = new ExcelJS.Workbook();
const worksheet = workbook.addWorksheet('My Sheet');

worksheet.columns = [
  { header: 'Id', key: 'id', width: 10 },
  { header: 'Name', key: 'name', width: 30 },
  { header: 'Age', key: 'age', width: 10 }
];

worksheet.addRow({ id: 1, name: 'John Doe', age: 30 });
worksheet.addRows([
  { id: 2, name: 'Jane Doe', age: 25 },
  { id: 3, name: 'Sam Smith', age: 40 }
]);

worksheet.getCell('A1').value = 'Updated Id';

worksheet.mergeCells('A1:C1');

worksheet.eachRow((row, rowNumber) => {
  console.log(`Row ${rowNumber}: `, row.values);
});

workbook.xlsx.writeFile('example.xlsx')
  .then(() => {
    console.log('File saved successfully!');
  })
  .catch(err => {
    console.error('Error writing file:', err);
  });