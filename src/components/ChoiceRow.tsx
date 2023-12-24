import React, {useState} from "react";
import {Divider, Radio, Table} from "antd";
import type {ColumnsType} from "antd/es/table";
import {DataGrid, GridColDef, GridValueGetterParams} from "@mui/x-data-grid";
import {Header} from "./Header";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Disabled User",
    age: 99,
    address: "Sydney No. 1 Lake Park",
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows,
    );
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.name === "Disabled User", // Column configuration not to be checked
    name: record.name,
  }),
};

// MUI
const columns2: GridColDef[] = [
  {field: "id", headerName: "ID", width: 70},
  {field: "firstName", headerName: "First name", width: 130},
  {field: "lastName", headerName: "Last name", width: 130},
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  {id: 1, lastName: "Snow", firstName: "Jon", age: 35},
  {id: 2, lastName: "Lannister", firstName: "Cersei", age: 42},
  {id: 3, lastName: "Lannister", firstName: "Jaime", age: 45},
  {id: 4, lastName: "Stark", firstName: "Arya", age: 16},
  {id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null},
  {id: 6, lastName: "Melisandre", firstName: null, age: 150},
  {id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44},
  {id: 8, lastName: "Frances", firstName: "Rossini", age: 36},
  {id: 9, lastName: "Roxie", firstName: "Harvey", age: 65},
];

export const ChoiceRow = () => {
  const [selectionType, setSelectionType] = useState<"checkbox" | "radio">(
    "checkbox",
  );

  return (
    <div style={{padding: 10}}>
      <Header />
      <div style={{border: "1px solid"}}>
        <div style={{textAlign: "center"}}>ANT Design cells</div>
        <div style={{padding: 10}}>
          <Radio.Group
            onChange={({target: {value}}) => {
              setSelectionType(value);
            }}
            value={selectionType}
          >
            <Radio value="checkbox">Checkbox</Radio>
            <Radio value="radio">radio</Radio>
          </Radio.Group>

          <Divider />

          <Table
            rowSelection={{
              type: selectionType,
              ...rowSelection,
            }}
            columns={columns}
            dataSource={data}
          />
        </div>
        <div style={{textAlign: "center"}}>ANT Design rows</div>
        <div style={{height: 400, width: "100%"}}>
          <DataGrid
            rows={rows}
            columns={columns2}
            initialState={{
              pagination: {
                paginationModel: {page: 0, pageSize: 5},
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
};
