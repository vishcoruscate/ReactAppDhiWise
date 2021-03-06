import React from "react";
import { useTable } from "react-table";

export const Table = ({
  columns,
  HeaderWrapper,
  RowWrappper,
  data = [],
  headerClass = "",
}) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => {
          return (
            <>
              {HeaderWrapper ? (
                <HeaderWrapper>
                  <tr
                    className={headerClass}
                    {...headerGroup.getHeaderGroupProps()}
                  >
                    {headerGroup.headers.map((column) => (
                      <th
                        className={column.className ?? ""}
                        {...column.getHeaderProps()}
                      >
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                </HeaderWrapper>
              ) : (
                <tr
                  className={headerClass}
                  {...headerGroup.getHeaderGroupProps()}
                >
                  {headerGroup.headers.map((column) => (
                    <th
                      className={column.className ?? ""}
                      {...column.getHeaderProps()}
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              )}
            </>
          );
        })}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <>
              {RowWrappper ? (
                <RowWrappper>
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                </RowWrappper>
              ) : (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              )}
            </>
          );
        })}
      </tbody>
    </table>
  );
};
