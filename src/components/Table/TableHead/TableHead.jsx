/* eslint-disable react/prop-types */
import "./TableHead.css";
export const TableHead = (props) => {
  return (
    <thead>
      <tr>
        {props.columns.map(({ label, key }) => (
          <th
            onClick={() => {
              props.sortData(key);
            }}
            key={key}
          >
            {label}
          </th>
        ))}
      </tr>
      
    </thead>
  );

};
