import React, { useState } from 'react';
import { Table, Button } from 'antd';

let sort = null;
const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];

const columns = [
    {
      title: 'Name',
      dataIndex: 'name'
    },
    {
      title: 'Age',
      dataIndex: 'age'
    },
    {
      title: 'Address',
      dataIndex: 'address'
    },
    {
        title: 'action',
        render(text, record) {
            return (
              <>
                <Button style={{ marginRight: '10px' }} onClick={sort}>up</Button>
                <Button>down</Button>
              </>
            );
        }
    }
  ];


const Index = () => {
    const [arr, setArr] = useState(data);
    sort = () => {
        const newArr = [...arr];
        const current = newArr[2];
         // eslint-disable-next-line prefer-destructuring
         newArr[2] = newArr[1];
         newArr[1] = current;
         setArr(newArr);
    };
    return (
      <Table columns={columns} dataSource={arr} size="small" />
    );
};
export default Index;
