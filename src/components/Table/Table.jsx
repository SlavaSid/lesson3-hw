/* eslint-disable no-unused-vars */
import "./Table.css";
import { useState } from "react";
import { TableHead } from "./TableHead/TableHead";
import { TableBody } from "./TableBody/TableBody";
import tableData1 from "../../tableData1.json";

export const Table = () => {
  const [tableData, setTableData] = useState(tableData1);
  const columns = [
    { label: "Full Name", key: "full_name" },
    { label: "Gender", key: "gender" },
    { label: "Age", key: "age" },
    { label: "Email", key: "email" },
  ];


  const sortData = (field) => {
const copyData = tableData.concat();
const copyTable = copyData.sort (
  (a, b) => {return a[field] > b[field] ? 1 : -1}
  
)
setTableData(copyTable);
  };
//   const handleSortDataString = () => {
//     setTableData((prevState) =>
//       prevState.sort((a, b) => a.name.localeCompare(b.name))
//     );
//   };
//   const handleSortDataNumber = () => {
//     setTableData((prevState) =>
//       prevState.sort((a, b) =>
//         a.age
//           .toString()
//           .localeCompare(b.age.toString(), "en", { numeric: true })
//       )
//     );
//   };

  return (
    <table className="table">
      <TableHead columns={columns} sortData={sortData}/>
      <TableBody columns={columns} tableData={tableData} />
    </table>
  );
};
