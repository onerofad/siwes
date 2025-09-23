import { saveAs } from "file-saver";
import * as XLSX from 'xlsx';

export const ExcelDownload= (data, columns, filename) => {

 // Convert the data to a format compatible with Excel
    const excelData = [
      columns.map((column) => column.title),
      ...data.map((item) => columns.map((column) => item[column.dataKey])),
    ];
  
    // Create the Excel file
    const worksheet = XLSX.utils.aoa_to_sheet(excelData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet 1");
  
    // Download file
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(blob, `${filename}.xlsx`);

    return(
        <>Hello</>
    )
  };


// Example of Usage:
// const yourData = [
// { column1: "Data 1", column2: "Data 2" },
// // ... Other data
// ];

// const columns = [
// { title: "Column 1", dataKey: "column1" },
// { title: "Column 2", dataKey: "column2" },
// // ... Other columns
// ];

// ExcelDownload(yourData, columns, "exported_data");