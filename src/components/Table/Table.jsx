/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./Table.css";
import { useState } from "react";
import { TableHead } from "./TableHead/TableHead";
import { TableBody } from "./TableBody/TableBody";
import { useSortableTable } from "../../useSortableTable"


export const Table = ({columns, data}) => {
  const [tableData, handleSorting] = useSortableTable(data, columns);



//   const handleSortData = (field) => {
// const copyData = tableData.concat();
// const copyTable = copyData.sort (
//   (a, b) => {return a[field] > b[field] ? 1 : -1}
  
// )
// setTableData(copyTable);
//   };
//   const handleSortDataString = () => {
//     setTableData((prevState) =>
//       prevState.sort((a, b) => a.name.localeCompare(b.name))
//     );
//   };
//   const handleSortDataNumber = () => {
//     setTableData((prevState) =>
//       prevState.sort((a, b) =>
//         a.age.toString().localeCompare(b.age.toString(), "en", { numeric: true })
//       )
//     );
//   };

  return (
    <table className="table">
      <TableHead columns={columns} handleSorting={handleSorting}/>
      <TableBody columns={columns} tableData={tableData} />
    </table>
  );
};